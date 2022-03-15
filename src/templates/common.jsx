import { graphql } from 'gatsby';
import React, { useEffect, useState } from 'react';
import DynamicComponent from '../utils/dynamic-component';
import Layout from '../components/layout';
import ScrollToTop from '../components/scroll-up/scrollUp';
import SEO from '../components/seo-component/seo';
import LoginPage from '../pages/login';

export default function CommonPage({ pageContext, data }) {
  const [user, setUser] = useState({});

  const loginUser = () => {
    localStorage.setItem('user', JSON.stringify(true));
    window.location.reload();
  };

  const logoutUser = () => {
    localStorage.setItem('user', JSON.stringify(false));
    window.location.reload();
  };

  useEffect(() => {
    const getUser = JSON.parse(localStorage.getItem('user'));
    setUser(getUser);
  }, [user]);

  return (
    <>
      { ((pageContext.appData.siteType === 'rmr') || user) ? (
        <Layout
          partnerCode={pageContext.partnerCode}
          navigation={pageContext.appData.navigation}
          footer={pageContext.appData.siteFooter}
          styles={pageContext.theme}
          contactFormDetails={pageContext.appData.contactUsFormDetails}
          siteType={pageContext.appData.siteType}
          logout={logoutUser}
          metadata={pageContext.theme.partnerMetaData}
          searchEnabled={pageContext.appData.enableSearch}
          astEnabled={pageContext.appData.hasAgentSelectionToolAstRequired}
        >
          <SEO
            title={data.contentfulPageTemplate.seo?.pageTitle}
            description={data.contentfulPageTemplate.seo?.pageDescription}
            metaKeywords={data.contentfulPageTemplate.seo?.metaKeywords}
          />
          {
          /* Print all Component Names */
          // eslint-disable-next-line max-len
          data.contentfulPageTemplate?.components
            ?.filter((component) => component?.sys?.contentType?.sys?.id)
            .map((component) => (
              <section key={component.id}>
                {DynamicComponent(component.sys.contentType.sys.id, component)}
              </section>
            ))
        }
          <ScrollToTop />
        </Layout>
      ) : (
        <LoginPage isLogin={user} login={loginUser} />
      )}
    </>
  );
}

export const query = graphql`
  query pageTemplateData ($contentful_id: String) {
    contentfulPageTemplate(contentful_id: {eq: $contentful_id}) {
      id
      pageName
      seo {
        pageDescription
        pageTitle
        metaKeywords
      }
      entryTitle
      contentful_id
      components {
        # ...ContentfulCompQumuCarousel
        ...ContentfulCompRichTextBlock
        ...ContentfulCompTextWithButton
        # ...compBrandPartnerLogoStrip
        # ...compNColumnLayout
        ...container
      } 
    }
  }

  # fragment ContentfulCompNColumnLayout on ContentfulCompNColumnLayout {
  #   id
  #   entryTitle
  #   title
  #   isContentInCard
  #   sys {
  #     contentType {
  #       sys {
  #         id
  #       }
  #     }
  #   }
  #   subComponents {
  #     ... on ContentfulCompCardWithTextAndLink {
  #       id
  #       entryTitle
  #       title
  #       subText {
  #         raw
  #       }
  #     }
  #   }
  # }

  # fragment ContentfulCompMultipleCarousel on ContentfulCompMultipleCarousel {
  #   id
  #   entryTitle
  #   selectCarouselType
  #   frames {
  #     image {
  #       file {
  #         url
  #       }
  #     }
  #     contentAlignment
  #     overlayAlignment
  #     eyebrowText
  #     heading
  #     bodyText {
  #       raw
  #     }
  #     primaryCallToAction {
  #       displayPrimaryCta
  #       labelForPrimaryCta
  #     }
  #   }
  #   sys {
  #     contentType {
  #       sys {
  #         id
  #       }
  #     }
  #   }
  # }
  
  # fragment ContentfulCompBrandPartnerLogoStrip on ContentfulCompBrandPartnerLogoStrip {
  #   areLogosInColor
  #   id
  #   entryTitle
  #   partnerLogo {
  #     id
  #     file {
  #       url
  #     }
  #   }
  #   description {
  #     raw
  #   }
  #   sys {
  #     contentType {
  #       sys {
  #         id
  #       }
  #     }
  #   }
  # }

  # # fragment ContentfulCompImageWithText on ContentfulCompImageWithText {
  # #   id
  # #   titleText
  # #   imageOnLeftOfText
  # #   hyperlink
  # #   titleUnderline
  # #   subText {
  # #     raw
  # #   }
  # #   image {
  # #     file {
  # #       url
  # #       contentType
  # #       fileName
  # #     }
  # #   }
  # #   sys {
  # #     contentType {
  # #       sys {
  # #         id
  # #       }
  # #     }
  # #   }
  # # }

  fragment ContentfulCompImageWithText2 on ContentfulCompImageWithText2 {
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
  fragment ContentfulCompRewardCalc on ContentfulCompRewardCalc {
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

  # fragment ContentfulCompQumuCarousel on ContentfulCompQumuCarousel {
  #   sys {
  #     contentType {
  #       sys {
  #         id
  #       }
  #     }
  #   }
  #   backgroundColor
  #   showImages
  #   subText {
  #     raw
  #   }
  #   title
  #   qumuVideoEmbed {
  #     qumuEmbedCode {
  #       internal {
  #         content
  #       }
  #     }
  #   }
  # }

  fragment ContentfulCompTextWithButton on ContentfulCompTextWithButton {
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

  # fragment ContentfulCompQuoteCarousel on ContentfulCompQuoteCarousel {
  #   id
  #   entryTitle
  #   sys {
  #     contentType {
  #       sys {
  #         id
  #       }
  #     }
  #   }
  #   image {
  #     file {
  #       url
  #     }
  #   }
  #   quoteItems {
  #     attributeText
  #     entryTitle
  #     quoteText {
  #       quoteText
  #     }
  #   }
  # }

  fragment ContentfulCompRichTextBlock on ContentfulCompRichTextBlock {
    id
    richText {
      raw
    }
    sys {
      contentType {
        sys {
          id
        }
      }
    }
  }

  # fragment ContentfulCompFaqAccordion on ContentfulCompFaqAccordion {
  #   id
  #   sys {
  #     contentType {
  #       sys {
  #         id
  #       }
  #     }
  #   }
  #   title
  #   displayFaqTitleAsH1Tag
  #   faqItem {
  #     question
  #     answer {
  #       raw
  #     }
  #   }
  # }

  fragment ContentfulCompImageOnly on ContentfulCompImageOnly {
    id
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
  
    fragment compMultipleCarousel on ContentfulCompMultipleCarousel {
      id
      entryTitle
      selectCarouselType
      frames {
        image {
          file {
            url
          }
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
    }
    quoteItems {
      attributeText
      entryTitle
      quoteText {
        quoteText
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

  fragment container on ContentfulCompContainer {
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
      contentful_id
      alignItems
      justifyContent
      alignText
      spacing
      topPadding
      bottomPadding
      leftPadding
      rightPadding
      columns {
        id
        entryTitle
        contentful_id
        backgroundColor
        textColor
        columnSize
        component {
          ...ContentfulCompImageWithText2
          ...ContentfulCompImageOnly
          ...ContentfulCompRewardCalc
          ...compImageWithFocalPoint
          ...ContentfulCompRichTextBlock
          ...compTabContainer
          ...compFooterLinks
          ...compCardsContainer
          ...compTimeline
          ...compTable
          ...compMultipleCarousel
          ...compFaqAccordion
          ...compQuoteCarousel
          ...compListContainer
          ...compToggle
          ...compVideoContainer
        }
      }
    }
  }
`;
