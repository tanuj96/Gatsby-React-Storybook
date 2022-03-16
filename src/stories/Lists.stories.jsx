import React from 'react';

import Lists from '../components/lists';

export default {
  title: 'Lists Component',
  component: Lists,
  argTypes: {
    data: {
      name: 'Data',
      type: { sys: {}, timelineItems: [{}] },
      defaultValue: {
        id: '70f808a7-4f2c-5ba6-926c-16cae07a97db',
        entryTitle: 'List Container | Row | Column | List Items',
        listItems: [
          {
            id: 'de5c45d7-7370-5339-9b1b-df4b652c6dd5',
            listBody: [
              {
                id: '532321e7-8c16-5dc5-9806-d2ab5ce4b057',
                maxHeight: 0,
                image: {
                  file: {
                    url: '//images.ctfassets.net/40v71zapbq14/1Urhq9crpnVSX0bf3JjxN6/bb0b787da12f6848ca0c0e46b029a3c8/Doraville_534.jpg'
                  }
                },
                sys: {
                  type: 'Entry',
                  contentType: {
                    sys: {
                      id: 'compImageOnly'
                    }
                  }
                }
              },
              {
                id: '0a9ef5fd-a8df-521c-98f9-79b8468c17e8',
                richText: {
                  raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"heading-6","content":[{"nodeType":"text","value":" 1. Step One Title","marks":[{"type":"bold"}],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"The following homes for purchase or rent provide an overview of housing for this area. They are shown to provide an idea of what homes look like in the area, what amenities you may find, and approximate price points. These sample properties will be updated periodically.","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"Sweetwater Brewery","marks":[],"data":{}}],"data":{"uri":"https://www.sweetwaterbrew.com/"}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"Restaurants","marks":[],"data":{}}],"data":{"uri":"https://www.tripadvisor.com/Restaurants-g34905-Doraville_Georgia.html"}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}}]}'
                },
                entryTitle: 'List 1 - Text',
                sys: {
                  contentType: {
                    sys: {
                      id: 'compRichTextBlock'
                    }
                  }
                }
              }
            ]
          },
          {
            id: 'f8687f36-b81d-5be0-9a5a-f8a0364f56bb',
            listBody: [
              {
                id: '7677f654-9287-5e55-a88c-05f0728cbab3',
                maxHeight: 0,
                image: {
                  file: {
                    url: '//images.ctfassets.net/40v71zapbq14/2mbz3lV0cNO3GsDtE06A3y/af229f27372c61b48d6bdc763b0c462d/Roswell_16.jpg'
                  }
                },
                sys: {
                  type: 'Entry',
                  contentType: {
                    sys: {
                      id: 'compImageOnly'
                    }
                  }
                }
              },
              {
                id: 'f289e414-839c-5f35-bb43-7c0ecb6bfd96',
                richText: {
                  raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"heading-6","content":[{"nodeType":"text","value":"2. Step Tow Title","marks":[{"type":"bold"}],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"The following homes for purchase or rent provide an overview of housing for this area. They are shown to provide an idea of what homes look like in the area, what amenities you may find, and approximate price points. These sample properties will be updated periodically.","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"Sweetwater Brewery","marks":[],"data":{}}],"data":{"uri":"https://www.sweetwaterbrew.com/"}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"Restaurants","marks":[],"data":{}}],"data":{"uri":"https://www.tripadvisor.com/Restaurants-g34905-Doraville_Georgia.html"}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}}]}'
                },
                entryTitle: 'List2-Text',
                sys: {
                  contentType: {
                    sys: {
                      id: 'compRichTextBlock'
                    }
                  }
                }
              }
            ]
          },
          {
            id: '9e718d24-5e32-588e-b3af-0554e879f132',
            listBody: [
              {
                id: 'c9ea4263-2bd3-51ce-b8fd-0418ffab5e87',
                maxHeight: 0,
                image: {
                  file: {
                    url: '//images.ctfassets.net/40v71zapbq14/5J09MgUS3xSFnD7XQvvNFq/c3a5d426704b09070d3590012d60ecd6/Roswell_12.jpg'
                  }
                },
                sys: {
                  type: 'Entry',
                  contentType: {
                    sys: {
                      id: 'compImageOnly'
                    }
                  }
                }
              },
              {
                id: '925db87d-d6a3-5bce-a980-750cc8e915bc',
                richText: {
                  raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"heading-6","content":[{"nodeType":"text","value":"3. Step Three Title","marks":[{"type":"bold"}],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"The following homes for purchase or rent provide an overview of housing for this area. They are shown to provide an idea of what homes look like in the area, what amenities you may find, and approximate price points. These sample properties will be updated periodically.","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"Sweetwater Brewery","marks":[],"data":{}}],"data":{"uri":"https://www.sweetwaterbrew.com/"}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"Restaurants","marks":[],"data":{}}],"data":{"uri":"https://www.tripadvisor.com/Restaurants-g34905-Doraville_Georgia.html"}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}}]}'
                },
                entryTitle: 'List 3 - Text',
                sys: {
                  contentType: {
                    sys: {
                      id: 'compRichTextBlock'
                    }
                  }
                }
              }
            ]
          }
        ],
        sys: {
          contentType: {
            sys: {
              id: 'compListContainer'
            }
          }
        },
        textColor: 'inherit',
        alignText: 'Left'
      }
    }
  }
};

export const Template = (args) => <Lists {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    id: '70f808a7-4f2c-5ba6-926c-16cae07a97db',
    entryTitle: 'List Container | Row | Column | List Items',
    listItems: [
      {
        id: 'de5c45d7-7370-5339-9b1b-df4b652c6dd5',
        listBody: [
          {
            id: '532321e7-8c16-5dc5-9806-d2ab5ce4b057',
            maxHeight: 0,
            image: {
              file: {
                url: '//images.ctfassets.net/40v71zapbq14/1Urhq9crpnVSX0bf3JjxN6/bb0b787da12f6848ca0c0e46b029a3c8/Doraville_534.jpg'
              }
            },
            sys: {
              type: 'Entry',
              contentType: {
                sys: {
                  id: 'compImageOnly'
                }
              }
            }
          },
          {
            id: '0a9ef5fd-a8df-521c-98f9-79b8468c17e8',
            richText: {
              raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"heading-6","content":[{"nodeType":"text","value":" 1. Step One Title","marks":[{"type":"bold"}],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"The following homes for purchase or rent provide an overview of housing for this area. They are shown to provide an idea of what homes look like in the area, what amenities you may find, and approximate price points. These sample properties will be updated periodically.","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"Sweetwater Brewery","marks":[],"data":{}}],"data":{"uri":"https://www.sweetwaterbrew.com/"}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"Restaurants","marks":[],"data":{}}],"data":{"uri":"https://www.tripadvisor.com/Restaurants-g34905-Doraville_Georgia.html"}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}}]}'
            },
            entryTitle: 'List 1 - Text',
            sys: {
              contentType: {
                sys: {
                  id: 'compRichTextBlock'
                }
              }
            }
          }
        ]
      },
      {
        id: 'f8687f36-b81d-5be0-9a5a-f8a0364f56bb',
        listBody: [
          {
            id: '7677f654-9287-5e55-a88c-05f0728cbab3',
            maxHeight: 0,
            image: {
              file: {
                url: '//images.ctfassets.net/40v71zapbq14/2mbz3lV0cNO3GsDtE06A3y/af229f27372c61b48d6bdc763b0c462d/Roswell_16.jpg'
              }
            },
            sys: {
              type: 'Entry',
              contentType: {
                sys: {
                  id: 'compImageOnly'
                }
              }
            }
          },
          {
            id: 'f289e414-839c-5f35-bb43-7c0ecb6bfd96',
            richText: {
              raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"heading-6","content":[{"nodeType":"text","value":"2. Step Tow Title","marks":[{"type":"bold"}],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"The following homes for purchase or rent provide an overview of housing for this area. They are shown to provide an idea of what homes look like in the area, what amenities you may find, and approximate price points. These sample properties will be updated periodically.","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"Sweetwater Brewery","marks":[],"data":{}}],"data":{"uri":"https://www.sweetwaterbrew.com/"}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"Restaurants","marks":[],"data":{}}],"data":{"uri":"https://www.tripadvisor.com/Restaurants-g34905-Doraville_Georgia.html"}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}}]}'
            },
            entryTitle: 'List2-Text',
            sys: {
              contentType: {
                sys: {
                  id: 'compRichTextBlock'
                }
              }
            }
          }
        ]
      },
      {
        id: '9e718d24-5e32-588e-b3af-0554e879f132',
        listBody: [
          {
            id: 'c9ea4263-2bd3-51ce-b8fd-0418ffab5e87',
            maxHeight: 0,
            image: {
              file: {
                url: '//images.ctfassets.net/40v71zapbq14/5J09MgUS3xSFnD7XQvvNFq/c3a5d426704b09070d3590012d60ecd6/Roswell_12.jpg'
              }
            },
            sys: {
              type: 'Entry',
              contentType: {
                sys: {
                  id: 'compImageOnly'
                }
              }
            }
          },
          {
            id: '925db87d-d6a3-5bce-a980-750cc8e915bc',
            richText: {
              raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"heading-6","content":[{"nodeType":"text","value":"3. Step Three Title","marks":[{"type":"bold"}],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"The following homes for purchase or rent provide an overview of housing for this area. They are shown to provide an idea of what homes look like in the area, what amenities you may find, and approximate price points. These sample properties will be updated periodically.","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"Sweetwater Brewery","marks":[],"data":{}}],"data":{"uri":"https://www.sweetwaterbrew.com/"}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"Restaurants","marks":[],"data":{}}],"data":{"uri":"https://www.tripadvisor.com/Restaurants-g34905-Doraville_Georgia.html"}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}}]}'
            },
            entryTitle: 'List 3 - Text',
            sys: {
              contentType: {
                sys: {
                  id: 'compRichTextBlock'
                }
              }
            }
          }
        ]
      }
    ],
    sys: {
      contentType: {
        sys: {
          id: 'compListContainer'
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
    id: '70f808a7-4f2c-5ba6-926c-16cae07a97db',
    entryTitle: 'List Container | Row | Column | List Items',
    listItems: [
      {
        id: 'de5c45d7-7370-5339-9b1b-df4b652c6dd5',
        listBody: [
          {
            id: '532321e7-8c16-5dc5-9806-d2ab5ce4b057',
            maxHeight: 0,
            image: {
              file: {
                url: '//images.ctfassets.net/40v71zapbq14/1Urhq9crpnVSX0bf3JjxN6/bb0b787da12f6848ca0c0e46b029a3c8/Doraville_534.jpg'
              }
            },
            sys: {
              type: 'Entry',
              contentType: {
                sys: {
                  id: 'compImageOnly'
                }
              }
            }
          },
          {
            id: '0a9ef5fd-a8df-521c-98f9-79b8468c17e8',
            richText: {
              raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"heading-6","content":[{"nodeType":"text","value":" 1. Step One Title","marks":[{"type":"bold"}],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"The following homes for purchase or rent provide an overview of housing for this area. They are shown to provide an idea of what homes look like in the area, what amenities you may find, and approximate price points. These sample properties will be updated periodically.","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"Sweetwater Brewery","marks":[],"data":{}}],"data":{"uri":"https://www.sweetwaterbrew.com/"}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"Restaurants","marks":[],"data":{}}],"data":{"uri":"https://www.tripadvisor.com/Restaurants-g34905-Doraville_Georgia.html"}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}}]}'
            },
            entryTitle: 'List 1 - Text',
            sys: {
              contentType: {
                sys: {
                  id: 'compRichTextBlock'
                }
              }
            }
          }
        ]
      },
      {
        id: 'f8687f36-b81d-5be0-9a5a-f8a0364f56bb',
        listBody: [
          {
            id: '7677f654-9287-5e55-a88c-05f0728cbab3',
            maxHeight: 0,
            image: {
              file: {
                url: '//images.ctfassets.net/40v71zapbq14/2mbz3lV0cNO3GsDtE06A3y/af229f27372c61b48d6bdc763b0c462d/Roswell_16.jpg'
              }
            },
            sys: {
              type: 'Entry',
              contentType: {
                sys: {
                  id: 'compImageOnly'
                }
              }
            }
          },
          {
            id: 'f289e414-839c-5f35-bb43-7c0ecb6bfd96',
            richText: {
              raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"heading-6","content":[{"nodeType":"text","value":"2. Step Tow Title","marks":[{"type":"bold"}],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"The following homes for purchase or rent provide an overview of housing for this area. They are shown to provide an idea of what homes look like in the area, what amenities you may find, and approximate price points. These sample properties will be updated periodically.","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"Sweetwater Brewery","marks":[],"data":{}}],"data":{"uri":"https://www.sweetwaterbrew.com/"}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"Restaurants","marks":[],"data":{}}],"data":{"uri":"https://www.tripadvisor.com/Restaurants-g34905-Doraville_Georgia.html"}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}}]}'
            },
            entryTitle: 'List2-Text',
            sys: {
              contentType: {
                sys: {
                  id: 'compRichTextBlock'
                }
              }
            }
          }
        ]
      },
      {
        id: '9e718d24-5e32-588e-b3af-0554e879f132',
        listBody: [
          {
            id: 'c9ea4263-2bd3-51ce-b8fd-0418ffab5e87',
            maxHeight: 0,
            image: {
              file: {
                url: '//images.ctfassets.net/40v71zapbq14/5J09MgUS3xSFnD7XQvvNFq/c3a5d426704b09070d3590012d60ecd6/Roswell_12.jpg'
              }
            },
            sys: {
              type: 'Entry',
              contentType: {
                sys: {
                  id: 'compImageOnly'
                }
              }
            }
          },
          {
            id: '925db87d-d6a3-5bce-a980-750cc8e915bc',
            richText: {
              raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"heading-6","content":[{"nodeType":"text","value":"3. Step Three Title","marks":[{"type":"bold"}],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"The following homes for purchase or rent provide an overview of housing for this area. They are shown to provide an idea of what homes look like in the area, what amenities you may find, and approximate price points. These sample properties will be updated periodically.","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"Sweetwater Brewery","marks":[],"data":{}}],"data":{"uri":"https://www.sweetwaterbrew.com/"}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}},{"nodeType":"hyperlink","content":[{"nodeType":"text","value":"Restaurants","marks":[],"data":{}}],"data":{"uri":"https://www.tripadvisor.com/Restaurants-g34905-Doraville_Georgia.html"}},{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}}]}'
            },
            entryTitle: 'List 3 - Text',
            sys: {
              contentType: {
                sys: {
                  id: 'compRichTextBlock'
                }
              }
            }
          }
        ]
      }
    ],
    sys: {
      contentType: {
        sys: {
          id: 'compListContainer'
        }
      }
    },
    textColor: 'inherit',
    alignText: 'Left'
  }
};
