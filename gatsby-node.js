/* eslint-disable max-len */

const path = require('path');
const searchIndexing = require('./search-util');
const favIcon = require('./download-favIcon');

const searchablePages = [];

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    }
  });
};

// eslint-disable-next-line no-unused-vars
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const templateComponent = path.resolve('src/templates/common.jsx');
  // sample test
  const leadFormTemplate = path.resolve('src/templates/leadFormPages.jsx');
  const astTemplate = path.resolve('src/templates/astPage.jsx');
  const query = await graphql(`
  query {
    contentfulPartnerSite(partnerId: {eq: "${process.env.PARTNER_CODE}"}) {
      entryTitle
      partnerId
      siteTitle
      programName
      enableSearch
      siteType
      hasAgentSelectionToolAstRequired
      contactUsFormDetails {
        deliveryEmailAddress
        entryTitle
        formTitle
        helperText
      }
      navigation {
        primaryLogoHeader {
          file {
            url
            contentType
            fileName
          }
          description
        }
        menus {
          id
          menuLabel
          isInternalLink
          menuItems {
            entryTitle
            label
            link {
              ... on ContentfulInternalLink {
                referenceToPage {
                  pageName
                  contentful_id
                }
                entryTitle
              }
            }
          }
          menuLink {
            link {
              ... on ContentfulInternalLink {
                referenceToPage {
                  pageName
                  contentful_id
                }
              }
              ... on ContentfulWebLink {
                id
                url
                openInANewTab
              }
            }
          }
        }
        buttonAction {
          entryTitle
          id
          contentful_id
          label
          link {
            ... on ContentfulPageAction {
              id
              entryTitle
              actionId
            }
          }
        }
      }
      siteFooter {
        entryTitle
        footerContainer {
          ... on ContentfulCompContainer {
            id
            backgroundColor
            contentful_id
            entryTitle
            backgroundImageOverlayColor
            backgroundImageOverlayOpacity
            backgroundImage {
              file {
                url
              }
            }
            sys {
              type
              contentType {
                sys {
                  id
                }
              }
            }
            rows {
              id
              entryTitle
              alignItems
              alignItems
              justifyContent
              alignText
              contentful_id
              topPadding
              spacing
              bottomPadding
              leftPadding
              rightPadding
              columns {
                id
                entryTitle
                contentful_id
                hasHoverEffect
                isCard
                columnSize
                backgroundColor
                textColor
                component {
                  ... on ContentfulCompImageOnly{
                    id
                maxHeight
                image {
                  file {
                    url
                  }
                }
                sys {
                  type
                  contentType {
                    sys {
                      id
                    }
                  }
                }
                  }
                  ... on ContentfulFooterLinks{
                    entryTitle
                  links {
                    label
                    link {
                      ... on ContentfulWebLink {
                        id
                        url
                        openInANewTab
                      }
                      ... on ContentfulInternalLink {
                        id
                        referenceToPage {
                          pageName
                        }
                      }
                    }
                  }
                  sys {
                    type
                    contentType {
                      sys {
                        id
                      }
                    }
                  }
                  }
                  ... on ContentfulCompRichTextBlock{
                                  id
                  richText {
                    raw
                  }
                  entryTitle
                  sys {
                    contentType {
                      sys {
                        id
                      }
                    }
                  }
                  }
                }
              }
            }
          }
        }
        footerLinks {
          id
          label
          link {
            ... on ContentfulInternalLink {
              referenceToPage {
                pageName
                contentful_id
              }
            }
          }
        }
      }
      compBasicModalLeadForm {
        referralFlowOrder
        nextStepButtonLabel
        previousStepButtonLabel
        serviceSelectionScreenTitle
        serviceSelectionScreenSubTitle
        additionalInfoScreen {
          id
          screenTitle
          internalTitle
          screenSubTitle
          additionalQuestions {
            id
            entryTitle
            isThisQuestionRequired
            questionLabel {
              raw
            }
            reportingLabelCategory
            typeOfAnswer
            fieldOptions
          }
        }
        serviceSelectionBuyingIcon {
          file {
            contentType
            fileName
            url
          }
        }
        serviceSelectionSellingIcon {
          file {
            contentType
            fileName
            url
          }
        }
        serviceSelectionLegalDisclaimer {
          raw
        }
        customerInfoScreenTitle
        customerInfoScreenSubTitle
        showMemberField
        memberFieldLabel
        customerTextOptInLegalDisclaimer {
          raw
        }
        customerInformationLegalDisclaimer {
          raw
        }
        buyingLocationScreenTitle
        sellingLocationScreenTitle
        thankYouScreen {
          closeButtonLabel
          bodyText {
            raw
          }
          screenTitleText {
            raw
          }
        }
      }
    }
    contentfulPartnerTheme(partnerId: {eq: "${process.env.PARTNER_CODE}"}) {
      entryTitle
      contentful_id
      buttonStyle {
        boxShadow
        buttonBackgroundColor
        entryTitle
        buttonFontFamily
        googleFontFamily
        buttonType
        buttonFontSize
        boxShadowBlur
        boxShadowColor
        boxShadowHorizontalPosition
        boxShadowVerticalPosition
      }
      entryTitle
      partnerId
      googleTagManagerId
      backgroud {
        contentful_id
        entryTitle
        bodyBackgroundColor
        footerBackgroundColor
        progressBarBackgroundColor
        progressBarBackgroundColorSecondary
      }
      grid {
        contentful_id
        gridSpacing
        gridJustifyContent
        gridAlignments
      }
      favIcon{
        favIcon{
            file{
               url
               }
             }
      }
      typography {
        bodyFontSize
        bodyTextColor
        contentful_id
        entryTitle
        headingColor
        headingFontFamily
        googleFontBody
        googleFontHeading
        bodyFontFamily
        headingFontSize
        h3
        h4
        h5
        h6
        headingLetterSpacing
        headingLineHeight
        linkTextColor
        footerFontSize
        footerTextColor
        footerLinkColor
        svgIconColor
      }
      astThemeTypography {
        astFontFamily
        bodyFontSize
        bodyTextColor
        headingTextColor
        linkTextColor
        progressBarColor
      }
      partnerMetaData {
        clientNumber
        entryTitle
        hesAstBuyCode
        hesAstBuySellCode
        hesAstSellCode
        leadSource
      }
      partnerAst {
        entryTitle
        consentToCallText {
          raw
        }
        rewardDisclosureText {
          raw
        }
        buyValueRewardTable {
          entryTitle
          childrenContentfulRewardTableRewardTiersJsonNode {
            max
            min
            reward
          }
          enableTableLookupCalculator
          rewardUnit
        }
        thankyouScreenForOfframps {
          displayLabelOne
          displayLabelTwo
          firstTitleForOffRamp
          labelForOffRampCloseButton
          secondTitleForOffRamp
          titleforOffRamp
        }
        buyPropertyTypes {
          backgroundColorOfTheIconWhenSelected
          contentful_id
          entryTitle
          icon {
            file {
              url
            }
            description
          }
          internal {
            content
          }
          label
          code
        }
        sellPropertyTypes {
          backgroundColorOfTheIconWhenSelected
          code
          contentful_id
          entryTitle
          icon {
            file {
              url
            }
            description
          }
          internal {
            content
          }
          label
          sys {
            contentType {
              sys {
                id
              }
            }
          }
        }
        buyingSellingPaths {
          ... on ContentfulBuySellOption {
            hasSell
            hasBuy
            entryTitle
            backgroundColorOfTheIconWhenSelected
            image {
              file {
                url
              }
              description
            }
            label
          }
        }
        screensWithContent {
          ... on ContentfulModifiedScreenContent {
            entryTitle
            screenType
            screenCategory
            slug
            contentful_id
          }
        }
      }
    }
  }`);

  reporter.success('Query fetched Successfully');
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

  // Download favicon
  const url = `https:${query?.data?.contentfulPartnerTheme?.favIcon?.favIcon.file.url}`;
  // if (query?.data?.contentfulPartnerTheme?.favIcon?.favIcon.file.url) {
  //   favIcon(url);
  // }

  async function asyncCall() {
    if (query?.data?.contentfulPartnerTheme?.favIcon?.favIcon.file.url) {
      await favIcon(url);
    }
  }
  asyncCall();

  const sitemapLinks = [];

  // Adding Homepage to Sitemap Links
  sitemapLinks.push({
    path: '',
    label: `${query?.data?.contentfulPartnerSite?.siteTitle} | Home`
  });

  // Looping through header navigation and creating pages..
  const navigation = query.data?.contentfulPartnerSite?.navigation?.menus;
  (navigation || [])
    .filter((menuItem) => menuItem?.menuLink?.link?.referenceToPage)
    .forEach((menuItem) => {
      const internalPagePath = menuItem.menuLink.link.referenceToPage.pageName;
      createPage({
        path: `${internalPagePath}`,
        component: templateComponent,
        context: {
          ...menuItem.menuLink.link,
          partnerCode: process.env.PARTNER_CODE,
          contentful_id: menuItem.menuLink.link.referenceToPage.contentful_id,
          appData: query.data.contentfulPartnerSite,
          theme: query.data?.contentfulPartnerTheme
        }
      });

      // Searchable Pages...
      searchablePages.push({
        path: internalPagePath,
        label: menuItem.menuLabel
      });

      // Adding Items to Sitemap
      sitemapLinks.push({
        path: internalPagePath,
        label: menuItem.menuLabel
      });
    });

  // Looping through siteFooter navigation and creating pages..
  const footerNavigation = query?.data?.contentfulPartnerSite?.siteFooter?.footerLinks;
  (footerNavigation || [])
    .filter((menuItem) => menuItem?.link?.referenceToPage)
    .forEach((menuItem) => {
      const internalPagePath = menuItem.link.referenceToPage.pageName;
      createPage({
        path: `${internalPagePath}`,
        component: templateComponent,
        context: {
          ...menuItem.link,
          partnerCode: process.env.PARTNER_CODE,
          contentful_id: menuItem.link.referenceToPage.contentful_id,
          appData: query.data.contentfulPartnerSite,
          theme: query.data?.contentfulPartnerTheme
        }
      });

      // Adding Items to Sitemap
      sitemapLinks.push({
        path: internalPagePath,
        label: menuItem.label
      });
    });

  // Looping through submenu navigation and creating pages..
  query.data?.contentfulPartnerSite?.navigation?.menus
    ?.forEach((item) => {
      item?.menuItems?.forEach((menuItem) => {
        const internalPagePath = menuItem?.link?.referenceToPage?.pageName;
        createPage({
          path: `${internalPagePath}`,
          component: templateComponent,
          context: {
            ...menuItem.link,
            partnerCode: process.env.PARTNER_CODE,
            contentful_id: menuItem?.link?.referenceToPage?.contentful_id,
            appData: query.data.contentfulPartnerSite,
            theme: query.data?.contentfulPartnerTheme
          }
        });

        // Searchable Pages...
        searchablePages.push({
          path: internalPagePath,
          label: menuItem.menuLabel
        });

        // Adding Items to Sitemap
        sitemapLinks.push({
          path: internalPagePath,
          label: menuItem.label
        });
      });
    });

  // Sitemap Page Creation
  const sitemapRoute = path.resolve('src/templates/sitemap.jsx');
  createPage({
    path: 'sitemap',
    component: sitemapRoute,
    context: {
      pages: sitemapLinks,
      partnerCode: process.env.PARTNER_CODE,
      appData: query.data.contentfulPartnerSite,
      theme: query.data?.contentfulPartnerTheme
    }
  });

  // Search Page Template
  const searchRoute = path.resolve('src/templates/search.jsx');
  createPage({
    path: 'search',
    component: searchRoute,
    context: {
      partnerCode: process.env.PARTNER_CODE,
      appData: query.data.contentfulPartnerSite,
      theme: query.data?.contentfulPartnerTheme
    }
  });

  // Looping through Ast screen for creating pages..
  const astPages = query?.data?.contentfulPartnerTheme?.partnerAst?.screensWithContent;
  const consentText = query?.data?.contentfulPartnerTheme?.partnerAst?.consentToCallText;
  const rewardDisclaimer = query?.data?.ccontentfulPartnerTheme?.partnerAst?.rewardDisclosureText;
  const siteMetaData = query?.data?.contentfulPartnerTheme?.partnerMetaData;
  const rewardTableData = query?.data?.contentfulPartnerTheme?.partnerAst?.buyValueRewardTable;
  const astBuySellPaths = query?.data?.contentfulPartnerTheme?.partnerAst?.buyingSellingPaths;
  const astBuyPropertyTypes = query?.data?.contentfulPartnerTheme?.partnerAst?.buyPropertyTypes;
  // eslint-disable-next-line max-len
  const astThankYouScreen = query?.data?.contentfulPartnerTheme?.partnerAst?.thankyouScreenForOfframps;
  const astSellPropertyTypes = query?.data?.contentfulPartnerTheme?.partnerAst?.sellPropertyTypes;
  const astBuyPages = [];
  const astSellPages = [];
  const astBothPages = [];
  // eslint-disable-next-line array-callback-return
  astPages?.map((page) => {
    if (page.screenCategory === 'BUY') {
      astBuyPages.push(page);
    } else if (page.screenCategory === 'SELL') {
      astSellPages.push(page);
    } else {
      astBuyPages.push(page);
      astSellPages.push(page);
      astBothPages.push(page);
    }
  });
  const astBuy = astBuyPages.filter((page) => page.screenType);
  const astSell = astSellPages.filter((page) => page.screenType);
  const astBoth = astBothPages.filter((page) => page.screenType);

  astBuy.forEach((page, index) => {
    const internalPagePath = page.screenType.toLowerCase().replace(/\s/g, '');

    createPage({
      path: index === 0 ? 'signup' : `signup/buy/${internalPagePath}`,
      component: astTemplate,
      context: {
        screenType: page.screenType,
        buySellPath: astBuySellPaths,
        metadata: siteMetaData,
        offrampReason: 'BUY_PRICE_OUT_OF_BOUND',
        rewardTable: rewardTableData,
        consentToCallText: consentText,
        rewardDisclaimerText: rewardDisclaimer,
        propertyTypes: astBuyPropertyTypes,
        thankYouScreen: astThankYouScreen,
        previous: index === 0 ? null : astBuy[index - 1],
        next: astBuy[index + 1],
        pageIndex: index,
        partnerCode: process.env.PARTNER_CODE,
        contentful_id: page.contentful_id,
        appData: query.data.contentfulPartnerTheme,
        theme: query.data?.contentfulPartnerTheme
      }
    });
  });

  astSell.forEach((page, index) => {
    const internalPagePath = page.screenType.toLowerCase().replace(/\s/g, '');

    createPage({
      path: index === 0 ? 'signup' : `signup/sell/${internalPagePath}`,
      component: astTemplate,
      context: {
        screenType: page.screenType,
        buySellPath: astBuySellPaths,
        metadata: siteMetaData,
        rewardTable: rewardTableData,
        consentToCallText: consentText,
        rewardDisclaimerText: rewardDisclaimer,
        offrampReason: 'SELL_PRICE_OUT_OF_BOUND',
        propertyTypes: astSellPropertyTypes,
        thankYouScreen: astThankYouScreen,
        previous: index === 0 ? null : astSell[index - 1],
        next: astSell[index + 1],
        pageIndex: index,
        partnerCode: process.env.PARTNER_CODE,
        contentful_id: page.contentful_id,
        appData: query.data.contentfulPartnerTheme,
        theme: query.data?.contentfulPartnerTheme
      }
    });
  });

  astBoth.forEach((page, index) => {
    const internalPagePath = page.screenType.toLowerCase().replace(/\s/g, '');

    createPage({
      path: index === 0 ? 'signup' : `signup/${internalPagePath}`,
      component: astTemplate,
      context: {
        screenType: page.screenType,
        buySellPath: astBuySellPaths,
        metadata: siteMetaData,
        rewardTable: rewardTableData,
        consentToCallText: consentText,
        rewardDisclaimerText: rewardDisclaimer,
        offrampReason: 'BUY_PRICE_OUT_OF_BOUND',
        propertyTypes: astBuyPropertyTypes,
        thankYouScreen: astThankYouScreen,
        buyPages: astBuy,
        sellPages: astSell,
        previous: index === 0 ? null : astBoth[index - 1],
        next: astBoth[index + 1],
        pageIndex: index,
        partnerCode: process.env.PARTNER_CODE,
        contentful_id: page.contentful_id,
        appData: query.data.contentfulPartnerTheme,
        theme: query.data?.contentfulPartnerTheme
      }
    });
  });

  // sample test
  // Looping through basic modal lead data for creating pages..
  const referralFlowOrder = query?.data?.contentfulPartnerSite?.compBasicModalLeadForm?.referralFlowOrder;
  const nextBtnLabel = query?.data?.contentfulPartnerSite?.compBasicModalLeadForm?.nextStepButtonLabel;
  const previousBtnLabel = query?.data?.contentfulPartnerSite?.compBasicModalLeadForm?.previousStepButtonLabel;
  const serviceSelectionScreenTitle = query?.data?.contentfulPartnerSite?.compBasicModalLeadForm?.serviceSelectionScreenTitle;
  const serviceSelectionScreenSubTitle = query?.data?.contentfulPartnerSite?.compBasicModalLeadForm?.serviceSelectionScreenSubTitle;
  const serviceSelectionBuyIcon = query?.data?.contentfulPartnerSite?.compBasicModalLeadForm?.serviceSelectionBuyingIcon;
  const serviceSelectionSellIcon = query?.data?.contentfulPartnerSite?.compBasicModalLeadForm?.serviceSelectionSellingIcon;
  const serviceSelectionLegalDisclaimer = query?.data?.contentfulPartnerSite?.compBasicModalLeadForm?.serviceSelectionLegalDisclaimer;
  const customerInfoScreenTitle = query?.data?.contentfulPartnerSite?.compBasicModalLeadForm?.customerInfoScreenTitle;
  const customerInfoScreenSubTitle = query?.data?.contentfulPartnerSite?.compBasicModalLeadForm?.customerInfoScreenSubTitle;
  const showMemberField = query?.data?.contentfulPartnerSite?.compBasicModalLeadForm?.showMemberField;
  const memberFieldLabel = query?.data?.contentfulPartnerSite?.compBasicModalLeadForm?.memberFieldLabel;
  const customerTextOptInLegalDisclaimer = query?.data?.contentfulPartnerSite?.compBasicModalLeadForm?.customerTextOptInLegalDisclaimer;
  const customerInformationLegalDisclaimer = query?.data?.contentfulPartnerSite?.compBasicModalLeadForm?.customerInformationLegalDisclaimer;
  const buyingLocationScreenTitle = query?.data?.contentfulPartnerSite?.compBasicModalLeadForm?.buyingLocationScreenTitle;
  const sellingLocationScreenTitle = query?.data?.contentfulPartnerSite?.compBasicModalLeadForm?.sellingLocationScreenTitle;
  const thankyouBodyText = query?.data?.contentfulPartnerSite?.compBasicModalLeadForm?.thankYouScreen?.bodyText;
  const screenTitleText = query?.data?.contentfulPartnerSite?.compBasicModalLeadForm?.thankYouScreen?.screenTitleText;
  const thankyouCloseButtonLabel = query?.data?.contentfulPartnerSite?.compBasicModalLeadForm?.thankYouScreen?.closeButtonLabel;
  // const leadFormBuySellPages = [];
  // const leadFormSellBuyPages = [];
  // const leadFormBuyPages = [];
  // const leadFormSellPages = [];
  // const leadFormCustomPages = [];
  // if (referralFlowOrder === 'Buying, Selling') {
  //   astBuyPages.push(page);
  // } else if (referralFlowOrder === 'Selling, Buying') {
  //   astSellPages.push(page);
  // } else if (referralFlowOrder === 'Buying Only') {
  //   astBuyPages.push(page);
  //   astSellPages.push(page);
  //   astBothPages.push(page);
  // } else {

  // }
  // const astBuy = astBuyPages.filter((page) => page.screenType);
  // const astSell = astSellPages.filter((page) => page.screenType);
  // const astBoth = astBothPages.filter((page) => page.screenType);
  createPage({
    path: 'service-selection',
    component: leadFormTemplate,
    context: {
      screenType: 'Buy Sell',
      flowOrder: referralFlowOrder,
      nextButtonLabel: nextBtnLabel,
      prevButtonLabel: previousBtnLabel,
      screenTitle: serviceSelectionScreenTitle,
      screenSubTitle: serviceSelectionScreenSubTitle,
      buyIcon: serviceSelectionBuyIcon,
      buyText: 'Buying',
      sellIcon: serviceSelectionSellIcon,
      sellText: 'Selling',
      legalDisclaimer: serviceSelectionLegalDisclaimer,
      pageIndex: 0,
      partnerCode: process.env.PARTNER_CODE,
      appData: query.data.contentfulPartnerSite,
      theme: query.data?.contentfulPartnerTheme
    }
  });
  createPage({
    path: 'customer-info',
    component: leadFormTemplate,
    context: {
      screenType: 'Customer Info',
      flowOrder: referralFlowOrder,
      nextButtonLabel: nextBtnLabel,
      prevButtonLabel: previousBtnLabel,
      screenTitle: customerInfoScreenTitle,
      screenSubTitle: customerInfoScreenSubTitle,
      isMemberField: showMemberField,
      memberFieldLbl: memberFieldLabel,
      txtOptInDisclaimer: customerTextOptInLegalDisclaimer,
      legalDisclaimer: customerInformationLegalDisclaimer,
      pageIndex: 1,
      partnerCode: process.env.PARTNER_CODE,
      appData: query.data.contentfulPartnerSite,
      theme: query.data?.contentfulPartnerTheme
    }
  });
  createPage({
    path: 'buy-location',
    component: leadFormTemplate,
    context: {
      screenType: 'Buy Location',
      flowOrder: referralFlowOrder,
      nextButtonLabel: nextBtnLabel,
      prevButtonLabel: previousBtnLabel,
      screenTitle: buyingLocationScreenTitle,
      pageIndex: 2,
      partnerCode: process.env.PARTNER_CODE,
      appData: query.data.contentfulPartnerSite,
      theme: query.data?.contentfulPartnerTheme
    }
  });
  createPage({
    path: 'sell-location',
    component: leadFormTemplate,
    context: {
      screenType: 'Sell Location',
      flowOrder: referralFlowOrder,
      nextButtonLabel: nextBtnLabel,
      prevButtonLabel: previousBtnLabel,
      screenTitle: sellingLocationScreenTitle,
      pageIndex: 3,
      partnerCode: process.env.PARTNER_CODE,
      appData: query.data.contentfulPartnerSite,
      theme: query.data?.contentfulPartnerTheme
    }
  });
  createPage({
    path: 'custom-question',
    component: leadFormTemplate,
    context: {
      screenType: 'Custom Question',
      flowOrder: referralFlowOrder,
      nextButtonLabel: nextBtnLabel,
      prevButtonLabel: previousBtnLabel,
      pageIndex: 4,
      partnerCode: process.env.PARTNER_CODE,
      appData: query.data.contentfulPartnerSite,
      theme: query.data?.contentfulPartnerTheme
    }
  });
  createPage({
    path: 'thankyou',
    component: leadFormTemplate,
    context: {
      screenType: 'Thank You',
      flowOrder: referralFlowOrder,
      screenTitle: screenTitleText,
      thxBodyText: thankyouBodyText,
      thxCloseButtonLabel: thankyouCloseButtonLabel,
      pageIndex: 5,
      partnerCode: process.env.PARTNER_CODE,
      appData: query.data.contentfulPartnerSite,
      theme: query.data?.contentfulPartnerTheme
    }
  });
  createPage({
    path: 'error',
    component: leadFormTemplate,
    context: {
      screenType: 'Error',
      pageIndex: 5,
      partnerCode: process.env.PARTNER_CODE,
      appData: query.data.contentfulPartnerSite,
      theme: query.data?.contentfulPartnerTheme
    }
  });
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  deletePage(page);
  createPage({
    ...page,
    context: {
      ...page.context,
      partnerCode: process.env.PARTNER_CODE
    }
  });
};

// Log out information after a build is done
exports.onPostBuild = async ({ reporter }) => {
  await searchIndexing(reporter, searchablePages);
  reporter.info('Your Gatsby site has been built!');
};
