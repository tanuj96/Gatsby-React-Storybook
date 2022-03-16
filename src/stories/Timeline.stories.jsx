import React from 'react';

import CustomizedTimeline from '../components/timeline';

export default {
  title: 'Timeline Component',
  component: CustomizedTimeline,
  argTypes: {
    data: {
      name: 'Timeline Content',
      type: {},
      defaultValue: {
        sys: {
          contentType: {
            sys: {
              id: 'compTimeline'
            }
          }
        },
        timelineItems: [
          {
            body: 'Because you need strength',
            title: 'Eat',
            text: 'Dec , 12th 2021',
            circleColor: '#369D16'
          },
          {
            body: "Because it's awesome!",
            title: 'code',
            text: 'Dec , 15th 2021',
            circleColor: '#9D1645'
          },
          {
            body: 'Because you need rest',
            title: 'Sleep',
            text: 'Apr , 12th 2021',
            circleColor: '#ABB0B3'
          },
          {
            body: 'Because this is the life you love!',
            title: 'repeat',
            text: 'today',
            circleColor: '#078FF0'
          }
        ],
        textColor: 'inherit',
        alignText: 'Left'
      }
    }
  }
};

export const Template = (args) => <CustomizedTimeline {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    sys: {
      contentType: {
        sys: {
          id: 'compTimeline'
        }
      }
    },
    timelineItems: [
      {
        body: 'Because you need strength',
        title: 'Eat',
        text: 'Dec , 12th 2021',
        circleColor: '#369D16'
      },
      {
        body: "Because it's awesome!",
        title: 'code',
        text: 'Dec , 15th 2021',
        circleColor: '#9D1645'
      },
      {
        body: 'Because you need rest',
        title: 'Sleep',
        text: 'Apr , 12th 2021',
        circleColor: '#ABB0B3'
      },
      {
        body: 'Because this is the life you love!',
        title: 'repeat',
        text: 'today',
        circleColor: '#078FF0'
      }
    ],
    textColor: 'inherit',
    alignText: 'Left'
  }
};

export const Secondary = Template.bind({});
Secondary.args = {
  data: {
    sys: {
      contentType: {
        sys: {
          id: 'compTimeline'
        }
      }
    },
    timelineItems: [
      {
        body: 'Secondary timeline body',
        title: 'Play',
        text: 'Jan , 31th 2023',
        circleColor: '#592741'
      },
      {
        body: "Because it's awesome!",
        title: 'code',
        text: 'Dec , 15th 2021',
        circleColor: '#9D1645'
      },
      {
        body: 'Because you need rest',
        title: 'Sleep',
        text: 'Apr , 12th 2021',
        circleColor: '#ABB0B3'
      },
      {
        body: 'Because this is the life you love!',
        title: 'repeat',
        text: 'today',
        circleColor: '#078FF0'
      }
    ],
    textColor: 'inherit',
    alignText: 'Left'
  }
};
