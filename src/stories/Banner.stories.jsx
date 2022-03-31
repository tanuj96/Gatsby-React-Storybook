import React from 'react';

import Banner from '../components/banner';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Banner',
  component: Banner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    data: {
      name: 'Data',
      type: {},
      defaultValue: {
        id: 'aca2222b-15cc-5b26-a8bc-3b4e2b103d3f',
        maxHeight: 100,
        bannerImage: {
          file: {
            url: '//images.ctfassets.net/40v71zapbq14/20xqMEn9pAotuTGqIqtpaw/e941cc44678c2505164081f8a168ef56/partner-logo_bhg__2x.png'
          }
        },
        sys: {
          type: 'Entry',
          contentType: {
            sys: {
              id: 'compImageOnly'
            }
          }
        },
        textColor: 'inherit',
        alignText: 'Center'
      }
    }
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Banner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    id: '8887c4d7-1698-5206-bd76-cd91e8d7cd12',
    maxHeight: 60,
    bannerImage: {
      file: {
        url: '//images.ctfassets.net/40v71zapbq14/3eFkPnuXmuI7L7eOfEtTr/155adfd9aa7eb875cdd836217933b7a2/equal_housing_logo.png'
      }
    },
    sys: {

      type: 'Entry',

      contentType: {

        sys: {

          id: 'compBanner'

        }

      }

    },

    title: 'Supporting Military and Veteran Families',

    bannerDescriptionRichText: {

      raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"We guide military families through the home purchase and sale process offering an experienced agent, $350-$7500 in cash back and local community insights from military and veteran families at PCSgrades.\\n\\n","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'

    },

    button: {

      primaryCtaShouldOpenInTheSameTab: true,

      primaryCtaShouldBeDisplayedAs: 'Button',

      displayPrimaryCta: true,

      labelForPrimaryCta: 'Get Started For Free'

    },

    bannerImage: {

      file: {

        url: '//images.ctfassets.net/40v71zapbq14/4wgwfnhwO2lpP2LetQg8WS/d1e179a2a53d1a0ee4456fdceac26faa/RMR_Homepage_with_PCS_Grades_Logo_1020.jpg'

      }

    },

    bannerLogo: {

      file: {

        url: '//images.ctfassets.net/40v71zapbq14/6viKiCay9yx9JChJ8prOiG/6c605f3f868e205b45bcf9df02820e9b/Realogy-logo-color_mar2020_updated.png'

      }

    },

    textColor: 'inherit',

    alignText: 'Left'
  }
};
