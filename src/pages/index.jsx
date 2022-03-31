import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { navigate } from 'gatsby-link';
import { useLocation } from '@reach/router';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import DynamicComponent from '../utils/dynamic-component';
import ScrollToTop from '../components/scroll-up/scrollUp';
import SEO from '../components/seo-component/seo';

export default function Home({ pageContext, data }) {
  const [user, setUser] = useState({});
  const location = useLocation();

  // const loginUser = () => {
  //   localStorage.setItem('user', JSON.stringify(true));
  //   window.location.reload();
  // };

  const logoutUser = () => {
    localStorage.setItem('user', JSON.stringify(false));
    window.location.reload();
  };

  const capitalizeKey = (key) => key.split('_').map((word, index) => (index ? word.charAt(0).toUpperCase() + word.slice(1) : word)).join('');

  const getQueryParams = (search) => decodeURI(search)
    .replace('?', '')
    .split('&')
    .map((param) => param.split('='))
    .reduce((values, [key, value]) => {
      if (key) { if (key == 'campaign_operator' || key == 'campaignoperator' || key == 'utm_campaignoperator') { key = 'utm_campaign_operator'; } else if (key == 'master_campaign' || key == 'utm_mastercampaign' || key == 'mastercampaign') { key = 'utm_master_campaign'; } values[capitalizeKey(key)] = value; }
      return values;
    }, {});

  useEffect(() => {
    const getUTM = JSON.parse(localStorage.getItem('utm'));

    const urlsParams = getQueryParams(location.search);
    if (urlsParams && Object.keys(urlsParams).length) {
      if (JSON.stringify(getUTM) !== JSON.stringify(urlsParams)) {
        localStorage.setItem('utm', JSON.stringify(urlsParams));
      }
    }
  }, [location.search]);

  useEffect(() => {
    const getUser = JSON.parse(localStorage.getItem('user'));
    setUser(getUser);
  }, [user]);

  return (
    <>
      <Layout
        partnerCode={pageContext.partnerCode}
        navigation={data.contentfulPartnerSite.navigation}
        styles={data.contentfulPartnerTheme}
        footer={data.contentfulPartnerSite.siteFooter}
        metadata={data.contentfulPartnerTheme.partnerMetaData}
        contactFormDetails={data.contentfulPartnerSite.contactUsFormDetails}
        logout={logoutUser}
        siteType={data.contentfulPartnerSite.siteType}
        searchEnabled={data.contentfulPartnerSite.enableSearch}
        astEnabled={data.contentfulPartnerSite.hasAgentSelectionToolAstRequired}
      >
        <SEO
          title={data.contentfulPartnerSite.homePage.seo?.pageTitle}
          description={data.contentfulPartnerSite.homePage.seo?.pageDescription}
          metaKeywords={data.contentfulPartnerSite.homePage.seo?.metaKeywords}
        />
        <h1 style={{
          position: 'absolute', width: '1px', height: '1px', padding: 0, margin: -'1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0
        }}
        >
          {data.contentfulPartnerSite.homePage.seo?.pageTitle}
        </h1>
        <Helmet>
          <meta name="icon" href="../../static/DynamicFavIcon.ico" />
        </Helmet>
        {
            /* Print all Component Names */
            // eslint-disable-next-line max-len
            data.contentfulPartnerSite?.homePage?.components
              .filter((component) => component?.sys?.contentType?.sys?.id)
              .map((component) => (
                <section key={component.id}>
                  {DynamicComponent(component.sys.contentType.sys.id,
                    component, pageContext.partnerCode)}
                </section>
              ))
          }
        <ScrollToTop />
      </Layout>
    </>
  );
}

export const query = graphql`
  query homepageData($partnerCode: String!) {
    contentfulPartnerSite(partnerId: {eq: $partnerCode}) {
      entryTitle
      partnerId
      programName
      enableSearch
      hasAgentSelectionToolAstRequired
      siteType
      contactUsFormDetails {
        deliveryEmailAddress
        entryTitle
        formTitle
        helperText
      }
      siteFooter {
        entryTitle
        footerContainer {
        ...compContainer
        }
      }
      compBasicModalLeadForm {
        referralFlowOrder
        nextStepButtonLabel
        previousStepButtonLabel
        serviceSelectionScreenTitle
        serviceSelectionScreenSubTitle
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
      homePage {
        pageName
        seo {
          pageDescription
          pageTitle
          metaKeywords
        }
        contentful_id
        components {
          ...compTextWithButton
          ...compQumuCarousel 
          ...compContainer
        }
      }
    }
    contentfulPartnerTheme(partnerId: {eq: $partnerCode}) {
      entryTitle
      contentful_id
      buttonStyle {
        boxShadow
        buttonBackgroundColor
        entryTitle
        buttonType
        buttonFontSize
        boxShadowBlur
        boxShadowColor
        boxShadowHorizontalPosition
        boxShadowVerticalPosition
        buttonFontFamily
        googleFontFamily
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
      partnerAst {
        entryTitle
        buyingSellingPaths {
          ...contentfulBuySellOption
        }
        screensWithContent {
          ...contentfulModifiedScreenContent
        }
      }
      partnerMetaData {
        clientNumber
        entryTitle
        hesAstBuyCode
        hesAstBuySellCode
        hesAstSellCode
        leadSource
        appType
        partner
        processor
      }
    }
  }

  fragment compAccordion on ContentfulCompAccordion {
    sys {
      type
      contentType {
        sys {
          id
        }
      }
    }
    id
    accordionBody {
      ... on ContentfulCompContainer {
        rows {
          columns {
            component {
              ...compRichTextBlock
              ...compSubAccordion
              ...compImageWithText2
            }
          }
        }
      }
    }
    accodionHeaderLabel
  }

  fragment compSubAccordion on ContentfulCompSubAccordion {
    sys {
      contentType {
        sys {
          id
        }
      }
    }
    id
    subAccordionHeaderLabel
    subAccordionBody {
      rows {
        columns {
          component {
            ...compRichTextBlock
            ...compImageWithText2
          }
        }
      }
    }
  }

  fragment contentfulModifiedScreenContent on ContentfulModifiedScreenContent {
    entryTitle
    screenType
    question {
      internal {
        content
      }
    }
    questionSubtext
    helperLabel
    helperText {
      internal {
        content
      }
    }
    showHelperText
    screenCode
    showRecentListings
    showRecentListingsInBothScreen
    screenIndex
    screenEnabled
    optInToTextingText {
      raw
    }
    backgroundColor
    screenCategory
  }

  fragment contentfulBuySellOption on ContentfulBuySellOption {
    label
    image {
      file {
        url
      }
    }
    hasBuy
    hasSell
    backgroundColorOfTheIconWhenSelected
  }

  fragment compTabContainer on ContentfulCompTabContainer {
    contentful_id
    entryTitle
    tabType
    tabHeaderBackgroundColor
    activeTabIndicatorColor
    tabBodyBackgroundColor
    tabBodyBoxShadow
    tabItems {
      contentful_id
      entryTitle
      tabLabel
      tabBody {
        ...compImageWithText2
        ...compRichTextBlock
        ...compAccordion
      }
    }
    sys {
      contentType {
        sys {
          id
        }
      }
    }
  }

  # fragment compNColumnLayout on ContentfulCompNColumnLayout {
    #     id
    #     entryTitle
    #     title
    #     isContentInCard
    #     sys {
    #       contentType {
    #         sys {
    #           id
    #         }
    #       }
    #     }
    #     subComponents {
    #       ... on ContentfulCompCardWithTextAndLink {
    #         id
    #         entryTitle
    #         title
    #         subText {
    #           raw
    #         }
    #       }
    #     }
    #   }

  fragment compMultipleCarousel on ContentfulCompMultipleCarousel {
    id
    entryTitle
    selectCarouselType
    frames {
      image {
        file {
          url
        }
        description
      }
      contentAlignment
      overlayAlignment
      eyebrowText
      heading
      bodyText {
        raw
      }
      primaryCallToAction {
        displayPrimaryCta
        labelForPrimaryCta
      }
    }
    sys {
      contentType {
        sys {
          id
        }
      }
    }
  }

  # fragment compBrandPartnerLogoStrip on ContentfulCompBrandPartnerLogoStrip {
    #     areLogosInColor
    #     id
    #     entryTitle
    #     partnerLogo {
    #       id
    #       file {
    #         url
    #       }
    #     }
    #     description {
    #       raw
    #     }
    #     sys {
    #       contentType {
    #         sys {
    #           id
    #         }
    #       }
    #     }
    #   }

  fragment compImageWithText2 on ContentfulCompImageWithText2 {
    id
    titleText
    titleUnderline
    imageMaxHeight
    subText {
      raw
    }
    image {
      file {
        url
        contentType
        fileName
      }
      description
    }
    isCtaButtonEnabled
    button {
      primaryCtaShouldOpenInTheSameTab
      primaryCtaShouldBeDisplayedAs
      displayPrimaryCta
      labelForPrimaryCta
    }
    sys {
      contentType {
        sys {
          id
        }
      }
    }
  }

  fragment compRewardCalc on ContentfulCompRewardCalc {
    id
    calculatorTitle
    entryTitle
    title
    subText {
      subText
    }
    backgroundImage {
      file {
        url
      }
    }
    enableCashBackPercentage
    cashBackTable {
      max
      min
      cashback
    }
    showSign
    calculatorLink {
      link {
        ... on ContentfulPageAction {
          entryTitle
        }
      }
      label
    }
    rewardCalcViewType
    isRewardInLinkColor
    itemId
    sys {
      contentType {
        sys {
          id
        }
      }
    }
  }

  fragment compTextWithButton on ContentfulCompTextWithButton {
    id
    entryTitle
    title
    button {
      link {
        label
        link {
          ... on ContentfulPageAction {
            entryTitle
          }
        }
      }
    }
    subText {
      raw
    }
    backgroundColor
    sys {
      contentType {
        sys {
          id
        }
      }
    }
  }

  fragment compQuoteCarousel on ContentfulCompQuoteCarousel {
    id
    entryTitle
    sys {
      contentType {
        sys {
          id
        }
      }
    }
    image {
      file {
        url
      }
      description
    }
    quoteItems {
      attributeText
      entryTitle
      quoteText {
        quoteText
      }
    }
  }

  fragment compQumuCarousel on ContentfulCompQumuCarousel {
    id
    sys {
      contentType {
        sys {
          id
        }
      }
    }
    backgroundColor
    showImages
    subText {
      raw
    }
    title
    qumuVideoEmbed {
      qumuEmbedCode {
        internal {
          content
        }
      }
    }
  }

  fragment compFaqAccordion on ContentfulCompFaqAccordion {
    id
    sys {
      contentType {
        sys {
          id
        }
      }
    }
    title
    displayFaqTitleAsH1Tag
    faqItem {
      id
      question
      answer {
        raw
      }
    }
  }

  fragment compImageOnly on ContentfulCompImageOnly {
    id
    maxHeight
    image {
      file {
        url
      }
      description
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

  fragment compFooterLinks on ContentfulFooterLinks {
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

  fragment compImageWithFocalPoint on ContentfulImageWithFocalPoint {
    id
    image {
      file {
        url
        details {
          size
          image {
            height
            width
          }
        }
      }
      gatsbyImageData
      fluid {
        srcSetWebp
      }
      description
    }
    focalPoint {
      focalPoint {
        x
        y
      }
    }
    sys {
      contentType {
        sys {
          id
        }
      }
    }
  }

  fragment compRichTextBlock on ContentfulCompRichTextBlock {
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

  fragment compTable on ContentfulCompTable {
    id
    entryTitle
    description
    cellPadding
    fixedHeader
    headerBackground
    headerCellColor
    rowHighlightColor
    evenCellBackground
    tableHeader
    tableWithPagination
    tableRows {
      id
      cellValues
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

  fragment compListContainer on ContentfulCompListContainer {
    id
    entryTitle
    listItems {
      id
      listBody {
        ...compImageOnly
        ...compRichTextBlock
      }
    }
    sys {
      contentType {
        sys {
          id
        }
      }
    }
  }

  fragment compToggle on ContentfulCompToggle {
    id
    entryTitle
    toggleButton1Label
    toggleButton2Label
    buyingHomeBody {
      toggleBodyImage {
        file {
          url
        }
      }
      toggleBodyText {
        raw
      }
    }
    sellingHomeBody {
      toggleBodyImage {
        file {
          url
        }
      }
      toggleBodyText {
        raw
      }
    }
    sys {
      contentType {
        sys {
          id
        }
      }
    }
  }

  fragment compCardsContainer on ContentfulCompCardsContainer{
    title
              sys {
                contentType {
                  sys {
                    id
                  }
                }
              }
              cards {
                cardLabel
                cardImage {
                  file {
                    url
                  }
                }
                cardContent {
                  link {
                    ... on ContentfulInternalLink {
                      referenceToPage {
                        pageName
                      }
                    }
                  }
                }
              }
    }

    fragment compTimeline on ContentfulCompTimeline {
      sys {
        contentType {
          sys {
            id
          }
        }
      }
      timelineItems {
        body
        title
        text
        circleColor
      }
    }

    fragment compVideoContainer on ContentfulCompVideoEmbedded {
      id
        sys {
          type
        contentType {
          sys {
            id
          }
        }
      }
      embeddedUrl {
        id
        embeddedUrl
      }
    }
    fragment compBanner on ContentfulCompBanner {

      sys {
       type
       contentType {
         sys {
           id
         }
       }
     }
     title
     bannerDescriptionRichText {
       raw
     }
     button {
       primaryCtaShouldOpenInTheSameTab
       primaryCtaShouldBeDisplayedAs
       displayPrimaryCta
       labelForPrimaryCta
     }
     bannerImage {
       file {
         url
       }
       description
     }
     bannerLogo {
       file {
         url
       }
       description
     }
   }
  fragment compContainer on ContentfulCompContainer {
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
          ...compImageWithText2
          ...compImageOnly
          ...compRewardCalc
          ...compFooterLinks
          ...compImageWithFocalPoint
          ...compTable
          ...ContentfulCompRichTextBlock
          ...compMultipleCarousel
          ...compFaqAccordion
          ...compQuoteCarousel
          ...compTabContainer
          ...compListContainer
          ...compToggle
          ...compCardsContainer
          ...compTimeline
          ...compVideoContainer
          ...compBanner
        }
      }
    }
  }
`;


// favIcon {
//   favIcon {
//   file {
//   url
//   }
//   }
//   }