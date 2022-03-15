/**
 * Util to create search index post build
 * - Goes through each searchable page
 * - Loads the document -> main using cheerio
 * - Main goes through each <section> and fetches the text from html
 * - Each text is then fed to lunr for indexing
 * - After indexing is done the same is then saved into ./public folder as search-index.json
 */

const fs = require('fs/promises');
const cheerio = require('cheerio');
const { Builder } = require('lunr');
const { join } = require('path');
const { v4 } = require('uuid');

// Console Util
let reporter = console;

// Create Lunr Index
const index = new Builder();
index.ref('id');
index.field('body');

// Data store for Website Search
const store = {};

/**
 * Create Search index.
 * @param {String} link link address -> html page
 * @param {String} title later..
 * @param {String} body Body text of the search para
 */
function createSearchIndex(slug, title = null, body) {
  const uuid = v4();

  // Adding text block to global store
  store[uuid] = {
    id: uuid,
    title,
    slug,
    body
  };

  // Add body to Lunr Search Index
  index.add({
    id: uuid,
    body: body.toLowerCase()
  });
}

async function processHtml(page) {
  const path = page.path === '' ? 'index.html' : `${page.path}/index.html`;

  reporter.info('Processing Page ----> ', path);

  const rawPage = await fs.readFile(join(__dirname, `public/${path}`));

  const $ = cheerio.load(rawPage);
  reporter.info(`Total Sections to Index -> ${$('main > div > section').length}`);
  $('main > div > section')
    .each((i, el) => {
      const body = $(el).text().replace(/[\r\n]+/gm, ' ');
      createSearchIndex(
        page.path === '' ? '/' : `/${page.path}`,
        page.label,
        body
      );
    });

  reporter.info(`Processed ${path}`);
}

function handleError(error) {
  reporter.error('Error building Index -> ', error);
}

/**
 * Search Indexing main function..
 * @param {Object} reporter GatsbyReporter object
 * @param {Array} searchablePages list of Searchable Pages
 */
const SearchIndexing = async (reporterLog, searchablePages) => {
  try {
    reporter = reporterLog || console;
    reporter.info(`Total Searchable Pages -> ${searchablePages?.length}`);

    // Processing Index first
    await processHtml({ path: '', label: 'Home' });

    // Processing all Pages
    const processAllHtml = searchablePages.map((page) => processHtml(page));
    await Promise.all(processAllHtml);

    const searchJSON = JSON.stringify({
      index: index.build(),
      store
    });

    // Save JSON to public folder
    await fs.writeFile(join(__dirname, 'public/static/search-index.json'), searchJSON);

    await fs.writeFile(join(__dirname, 'static/search-index.json'), searchJSON);

    reporter.info('Search Index created at public/static/search-index.json');
  } catch (error) {
    handleError(error);
  }
};

// SearchIndexing(null, [{
//   path: 'cash-back',
//   label: 'Cash Back'
// }]);

module.exports = SearchIndexing;
