/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
const fs = require('fs');
const https = require('https');

const favIcon = (url) => {
  https.get(url, (res) => {
    const favIconPath = `${__dirname}/static/favicon.ico`;
    const favIconPathBuild = `${__dirname}/public/favicon.ico`;
    const filePath = fs.createWriteStream(favIconPath);
    const filePathBuild = fs.createWriteStream(favIconPathBuild);

    res.pipe(filePath);
    res.pipe(filePathBuild);
    filePath.on('finish', () => {
      filePath.close();
    });

    filePathBuild.on('finish', () => {
      filePathBuild.close();
    });
  });
};

module.exports = favIcon;
