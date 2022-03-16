import React from 'react';

import ImageOnly from '../components/image-only';

export default {
  title: 'ImageOnly Component',
  component: ImageOnly,
  argTypes: {
    data: {
      name: 'Image Only Content',
      type: {},
      defaultValue: {
        id: 'aca2222b-15cc-5b26-a8bc-3b4e2b103d3f',
        maxHeight: 100,
        image: {
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

export const Template = (args) => <ImageOnly {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    id: '8887c4d7-1698-5206-bd76-cd91e8d7cd12',
    maxHeight: 60,
    image: {
      file: {
        url: '//images.ctfassets.net/40v71zapbq14/3eFkPnuXmuI7L7eOfEtTr/155adfd9aa7eb875cdd836217933b7a2/equal_housing_logo.png'
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
    alignText: 'Left'
  }
};

export const Secondary = Template.bind({});
Secondary.args = {
  data: {
    id: '6d42feff-e9cb-56f7-a82e-0f85a4cf47c5',
    maxHeight: 100,
    image: {
      file: {
        url: '//images.ctfassets.net/40v71zapbq14/1QYKTmrwo4iAixOP5mtbI9/a96dd9a5b42615b1bae46cbacdfa637c/C21.png'
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
};
