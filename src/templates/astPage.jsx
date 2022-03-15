import { graphql } from 'gatsby';
import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import AstContextProvider from '../utils/ast-context';
import { myStyles, BorderLinearProgress } from '../components/signuppopup/styles';
import DynamicAst from '../utils/dynamic-leadForm';
import ThemeContext from '../utils/theme-context';
import { customeTheme } from '../styles';

export default function AstPage({ pageContext, data }) {
  const classes = myStyles();
  const [partnerTheme] = useState(pageContext.theme);
  return (
    <ThemeContext.Provider value={partnerTheme}>
      <ThemeProvider theme={customeTheme(partnerTheme)}>
        <Container fixed>
          <div className={classes.root}>
            <BorderLinearProgress variant="determinate" value={(pageContext.pageIndex + 1) * 10} />
          </div>
          <AstContextProvider>
            {DynamicAst(pageContext.screenType, data.contentfulModifiedScreenContent, pageContext)}
          </AstContextProvider>
        </Container>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export const query = graphql`
  query($contentful_id: String) {
    contentfulModifiedScreenContent(contentful_id: {eq: $contentful_id}) {
      id
      entryTitle
      screenType
      slug
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
      screenCategory
      optInToTextingText {
        raw
      }
      backgroundColor
    }
  }
`;
