// import React from 'react';

// import TabsAccordion from '../components/tabs-accordion';

// export default {
//   title: 'Tabs Accordion Component',
//   component: TabsAccordion,
//   argTypes: {
//     data: {
//       name: 'Timeline Content',
//       type: {},
//       defaultValue: {
//         sys: {
//           type: 'Entry',
//           contentType: {
//             sys: {
//               id: 'accordion'
//             }
//           }
//         },
//         id: '35ae5a3f-2adf-5c09-8079-f06e57c4dfa3',
//         accordionBody: {
//           rows: [
//             {
//               columns: [
//                 {
//                   component: {
//                     id: '3a231397-23dd-554e-b6da-43f23b425c19',
//                     richText: {
//                       raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"unordered-list","content":[{"nodeType":"list-item","content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"Golf Courses","marks":[],"data":{}}],"data":{"uri":"https://www.golfnow.com/course-directory/us/ga/12799-alpharetta"}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}}],"data":{}},{"nodeType":"list-item","content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"Disc Golf","marks":[],"data":{}}],"data":{"uri":"https://willspark.com/activities/discgolf-info/"}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}}],"data":{}},{"nodeType":"list-item","content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"Top Golf","marks":[],"data":{}}],"data":{"uri":"https://topgolf.com/us/alpharetta/"}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}}],"data":{}},{"nodeType":"list-item","content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"Aquatic Center","marks":[],"data":{}}],"data":{"uri":"https://willspark.com/activities/swimming-info/"}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}}],"data":{}},{"nodeType":"list-item","content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"Hunting","marks":[],"data":{}}],"data":{"uri":"https://stepoutside.org/alpharetta-ga/hunting/"}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}}],"data":{}},{"nodeType":"list-item","content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"Big Creek Greenway Trail","marks":[],"data":{}}],"data":{"uri":"https://www.traillink.com/trail/big-creek-greenway/"}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}}],"data":{}},{"nodeType":"list-item","content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"The Equestrian Reserve","marks":[],"data":{}}],"data":{"uri":"http://www.theequestrianreserve.com/equestrian-reserve-facilities-amenities.html"}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}}],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"\\n\\n","marks":[],"data":{}}],"data":{}}]}'
//                     },
//                     entryTitle: 'Recreation & Culture | OUTDOOR ACTIVITIES | Container | Row | Column | RichText',
//                     sys: {
//                       contentType: {
//                         sys: {
//                           id: 'compRichTextBlock'
//                         }
//                       }
//                     }
//                   }
//                 }
//               ]
//             }
//           ]
//         },
//         accodionHeaderLabel: 'OUTDOOR ACTIVITIES'
//       }
//     }
//   }
// };

// export const Template = (args) => <TabsAccordion {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   data: {
//     sys: {
//       type: 'Entry',
//       contentType: {
//         sys: {
//           id: 'accordion'
//         }
//       }
//     },
//     id: '35ae5a3f-2adf-5c09-8079-f06e57c4dfa3',
//     accordionBody: {
//       rows: [
//         {
//           columns: [
//             {
//               component: {
//                 id: '3a231397-23dd-554e-b6da-43f23b425c19',
//                 richText: {
//                   raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"unordered-list","content":[{"nodeType":"list-item","content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"Golf Courses","marks":[],"data":{}}],"data":{"uri":"https://www.golfnow.com/course-directory/us/ga/12799-alpharetta"}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}}],"data":{}},{"nodeType":"list-item","content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"Disc Golf","marks":[],"data":{}}],"data":{"uri":"https://willspark.com/activities/discgolf-info/"}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}}],"data":{}},{"nodeType":"list-item","content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"Top Golf","marks":[],"data":{}}],"data":{"uri":"https://topgolf.com/us/alpharetta/"}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}}],"data":{}},{"nodeType":"list-item","content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"Aquatic Center","marks":[],"data":{}}],"data":{"uri":"https://willspark.com/activities/swimming-info/"}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}}],"data":{}},{"nodeType":"list-item","content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"Hunting","marks":[],"data":{}}],"data":{"uri":"https://stepoutside.org/alpharetta-ga/hunting/"}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}}],"data":{}},{"nodeType":"list-item","content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"Big Creek Greenway Trail","marks":[],"data":{}}],"data":{"uri":"https://www.traillink.com/trail/big-creek-greenway/"}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}}],"data":{}},{"nodeType":"list-item","content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"The Equestrian Reserve","marks":[],"data":{}}],"data":{"uri":"http://www.theequestrianreserve.com/equestrian-reserve-facilities-amenities.html"}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}}],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"\\n\\n","marks":[],"data":{}}],"data":{}}]}'
//                 },
//                 entryTitle: 'Recreation & Culture | OUTDOOR ACTIVITIES | Container | Row | Column | RichText',
//                 sys: {
//                   contentType: {
//                     sys: {
//                       id: 'compRichTextBlock'
//                     }
//                   }
//                 }
//               }
//             }
//           ]
//         }
//       ]
//     },
//     accodionHeaderLabel: 'OUTDOOR ACTIVITIES'
//   }
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   data: {
//     sys: {
//       contentType: {
//         sys: {
//           id: 'compTimeline'
//         }
//       }
//     },
//     timelineItems: [
//       {
//         body: 'Secondary timeline body',
//         title: 'Play',
//         text: 'Jan , 31th 2023',
//         circleColor: '#592741'
//       },
//       {
//         body: "Because it's awesome!",
//         title: 'code',
//         text: 'Dec , 15th 2021',
//         circleColor: '#9D1645'
//       },
//       {
//         body: 'Because you need rest',
//         title: 'Sleep',
//         text: 'Apr , 12th 2021',
//         circleColor: '#ABB0B3'
//       },
//       {
//         body: 'Because this is the life you love!',
//         title: 'repeat',
//         text: 'today',
//         circleColor: '#078FF0'
//       }
//     ],
//     textColor: 'inherit',
//     alignText: 'Left'
//   }
// };
