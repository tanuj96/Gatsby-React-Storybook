import React from 'react';

import LinkCard from '../components/link-card';

export default {
  title: 'Link Card',
  component: LinkCard,
  argTypes: {
    data: {
      name: 'Data',
      type: {},
      defaultValue: {
        title: 'Communities of Interest',
        sys: {
          contentType: {
            sys: {
              id: 'compCardsContainer'
            }
          }
        },
        cards: [
          {
            cardLabel: 'Alpharetta',
            cardImage: {
              file: {
                url: '//images.ctfassets.net/40v71zapbq14/QJsJiQd0lWJhqlSVzKUxU/e4e64faed75eebdae66e41b3c06f3ca2/Brookhaven_14.jpg'
              }
            },
            cardContent: [
              {
                link: {
                  referenceToPage: {
                    pageName: 'housing-alpharetta'
                  }
                }
              }
            ]
          },
          {
            cardLabel: 'Brookhaven',
            cardImage: {
              file: {
                url: '//images.ctfassets.net/40v71zapbq14/5OuP8vZ5Pg1H2iVfA71Vnh/afcd4c91dac1eb93459bb26ea8bce3ca/Brookhaven_26.jpg'
              }
            },
            cardContent: [
              {
                link: {
                  referenceToPage: {
                    pageName: 'housing-brookhaven'
                  }
                }
              }
            ]
          },
          {
            cardLabel: 'Buckhead',
            cardImage: {
              file: {
                url: '//images.ctfassets.net/40v71zapbq14/6bwZsqSwH2Fy0cVfyTkndI/8e563f7edcba2e27213139a408066ffd/Buckhead_Purchase6.png'
              }
            },
            cardContent: [
              {
                link: {
                  referenceToPage: {
                    pageName: 'housing-buckhead'
                  }
                }
              }
            ]
          },
          {
            cardLabel: 'Castleberry Hill',
            cardImage: {
              file: {
                url: '//images.ctfassets.net/40v71zapbq14/d7Rn23okMW0D90FNLE6UX/5b0ffbb6571e457df28868aa2b5da4b7/Alpharetta_Rental4.jpg'
              }
            },
            cardContent: [
              {
                link: {
                  referenceToPage: {
                    pageName: 'housing-castleberryhill'
                  }
                }
              }
            ]
          },
          {
            cardLabel: 'Chamblee',
            cardImage: {
              file: {
                url: '//images.ctfassets.net/40v71zapbq14/5sFB76F6e04Z718dTcHwhQ/e01d38a624ba74d3ca1b4fad8d720b39/Chamblee_hero.png'
              }
            },
            cardContent: [
              {
                link: {
                  referenceToPage: {
                    pageName: 'housing-chamblee'
                  }
                }
              }
            ]
          },
          {
            cardLabel: 'Doraville',
            cardImage: {
              file: {
                url: '//images.ctfassets.net/40v71zapbq14/64shpAmkpjgRREYm2oi5YM/3a9b81b9f68f87bce561e93ac114672b/Doraville_hero.png'
              }
            },
            cardContent: [
              {
                link: {
                  referenceToPage: {
                    pageName: 'housing-doraville'
                  }
                }
              }
            ]
          },
          {
            cardLabel: 'Dunwoody',
            cardImage: {
              file: {
                url: '//images.ctfassets.net/40v71zapbq14/7ofKc4ql70yqj1XUtAVgtY/db21cd1f552bb3ccce767245d968dc4a/Dunwoody_375.jpg'
              }
            },
            cardContent: [
              {
                link: {
                  referenceToPage: {
                    pageName: 'housing-dunwoody'
                  }
                }
              }
            ]
          },
          {
            cardLabel: 'Greater Midtown',
            cardImage: {
              file: {
                url: '//images.ctfassets.net/40v71zapbq14/5Zb4nVcSR5v3cR757HLg7R/eeb45ac89fe4fb28a5a1849e0ac20839/Greater_Midtown_33.jpg'
              }
            },
            cardContent: [
              {
                link: {
                  referenceToPage: {
                    pageName: 'housing-greater-midtown'
                  }
                }
              }
            ]
          },
          {
            cardLabel: 'Johns Creek',
            cardImage: {
              file: {
                url: '//images.ctfassets.net/40v71zapbq14/4OOkRrIRCFfo2lhstDGTDH/6d39f0f41bfed98f227d62c1fccca697/Johns_Creek_265.jpg'
              }
            },
            cardContent: [
              {
                link: {
                  referenceToPage: {
                    pageName: 'housing-johnscreek'
                  }
                }
              }
            ]
          },
          {
            cardLabel: 'Mabelton',
            cardImage: {
              file: {
                url: '//images.ctfassets.net/40v71zapbq14/1IvuYLAAiG5IxVFv7WAt8Y/7c537b9e89ab67a7251033ca79457b62/Mabelton_22.png'
              }
            },
            cardContent: [
              {
                link: {
                  referenceToPage: {
                    pageName: 'housing-mabelton'
                  }
                }
              }
            ]
          },
          {
            cardLabel: 'Marietta',
            cardImage: {
              file: {
                url: '//images.ctfassets.net/40v71zapbq14/6kkNvmZcqf8GlUr316RDwm/c328db0fd5fc96587e4c35a6f77887f9/Marietta_27.jpg'
              }
            },
            cardContent: [
              {
                link: {
                  referenceToPage: {
                    pageName: 'housing-marietta'
                  }
                }
              }
            ]
          },
          {
            cardLabel: 'Old Fourth Ward',
            cardImage: {
              file: {
                url: '//images.ctfassets.net/40v71zapbq14/5bDRPfyAlP6DWUYQtQdfjE/6287c07060b4fa7dec3cc47006f82037/Old_Fourth_23.jpg'
              }
            },
            cardContent: [
              {
                link: {
                  referenceToPage: {
                    pageName: 'housing-oldfourthward'
                  }
                }
              }
            ]
          },
          {
            cardLabel: 'Peachtree Corners',
            cardImage: {
              file: {
                url: '//images.ctfassets.net/40v71zapbq14/20HASRlSonLAlIh8jNp3fd/c416beadb31d55725ebef23714fa60ac/Peachtree_22.jpg'
              }
            },
            cardContent: [
              {
                link: {
                  referenceToPage: {
                    pageName: 'housing-peachtreecorners'
                  }
                }
              }
            ]
          },
          {
            cardLabel: 'Roswell',
            cardImage: {
              file: {
                url: '//images.ctfassets.net/40v71zapbq14/7tS7WbrDVQUTWulQohRwlx/1f380d823a03e2a985d48201e1901f9c/Roswell_18.jpg'
              }
            },
            cardContent: [
              {
                link: {
                  referenceToPage: {
                    pageName: 'housing-rosewell'
                  }
                }
              }
            ]
          },
          {
            cardLabel: 'Sandy Springs',
            cardImage: {
              file: {
                url: '//images.ctfassets.net/40v71zapbq14/41RZVxY3Y3elcQWji1kV70/3dea36c9ffd5cc35cd74f603e8e9eed6/Sandy_Springs_hero.jpg'
              }
            },
            cardContent: [
              {
                link: {
                  referenceToPage: {
                    pageName: 'housing-sandy-springs'
                  }
                }
              }
            ]
          },
          {
            cardLabel: 'Smyrna',
            cardImage: {
              file: {
                url: '//images.ctfassets.net/40v71zapbq14/6GieOTSv9pLrmsUeiHKh07/0b6e8e2f2abcbb7028279b3f0d855cdd/Smyrna_18.jpg'
              }
            },
            cardContent: [
              {
                link: {
                  referenceToPage: {
                    pageName: 'housing-smyrna'
                  }
                }
              }
            ]
          },
          {
            cardLabel: 'Vinings/Cumberland',
            cardImage: {
              file: {
                url: '//images.ctfassets.net/40v71zapbq14/6fn59BRQDDAnSMyAoS1w2u/68d3b3e500a7df4b300e2fcde7698cfe/Vinings_hero.png'
              }
            },
            cardContent: [
              {
                link: {
                  referenceToPage: {
                    pageName: 'housing-vinings-cumberland'
                  }
                }
              }
            ]
          }
        ],
        textColor: 'inherit',
        alignText: 'center'
      }
    }
  }
};

export const Template = (args) => <LinkCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    name: 'Data',
    type: {},
    defaultValue: {
      title: 'card links',
      sys: {
        contentType: {
          sys: {
            id: 'compCardsContainer'
          }
        }
      },
      cards: [
        {
          cardLabel: 'Alpharetta',
          cardImage: {
            file: {
              url: '//images.ctfassets.net/40v71zapbq14/QJsJiQd0lWJhqlSVzKUxU/e4e64faed75eebdae66e41b3c06f3ca2/Brookhaven_14.jpg'
            }
          },
          cardContent: [
            {
              link: {
                referenceToPage: {
                  pageName: 'housing-alpharetta'
                }
              }
            }
          ]
        },
        {
          cardLabel: 'Brookhaven',
          cardImage: {
            file: {
              url: '//images.ctfassets.net/40v71zapbq14/5OuP8vZ5Pg1H2iVfA71Vnh/afcd4c91dac1eb93459bb26ea8bce3ca/Brookhaven_26.jpg'
            }
          },
          cardContent: [
            {
              link: {
                referenceToPage: {
                  pageName: 'housing-brookhaven'
                }
              }
            }
          ]
        },
        {
          cardLabel: 'Buckhead',
          cardImage: {
            file: {
              url: '//images.ctfassets.net/40v71zapbq14/6bwZsqSwH2Fy0cVfyTkndI/8e563f7edcba2e27213139a408066ffd/Buckhead_Purchase6.png'
            }
          },
          cardContent: [
            {
              link: {
                referenceToPage: {
                  pageName: 'housing-buckhead'
                }
              }
            }
          ]
        },
        {
          cardLabel: 'Castleberry Hill',
          cardImage: {
            file: {
              url: '//images.ctfassets.net/40v71zapbq14/d7Rn23okMW0D90FNLE6UX/5b0ffbb6571e457df28868aa2b5da4b7/Alpharetta_Rental4.jpg'
            }
          },
          cardContent: [
            {
              link: {
                referenceToPage: {
                  pageName: 'housing-castleberryhill'
                }
              }
            }
          ]
        },
        {
          cardLabel: 'Chamblee',
          cardImage: {
            file: {
              url: '//images.ctfassets.net/40v71zapbq14/5sFB76F6e04Z718dTcHwhQ/e01d38a624ba74d3ca1b4fad8d720b39/Chamblee_hero.png'
            }
          },
          cardContent: [
            {
              link: {
                referenceToPage: {
                  pageName: 'housing-chamblee'
                }
              }
            }
          ]
        },
        {
          cardLabel: 'Doraville',
          cardImage: {
            file: {
              url: '//images.ctfassets.net/40v71zapbq14/64shpAmkpjgRREYm2oi5YM/3a9b81b9f68f87bce561e93ac114672b/Doraville_hero.png'
            }
          },
          cardContent: [
            {
              link: {
                referenceToPage: {
                  pageName: 'housing-doraville'
                }
              }
            }
          ]
        },
        {
          cardLabel: 'Dunwoody',
          cardImage: {
            file: {
              url: '//images.ctfassets.net/40v71zapbq14/7ofKc4ql70yqj1XUtAVgtY/db21cd1f552bb3ccce767245d968dc4a/Dunwoody_375.jpg'
            }
          },
          cardContent: [
            {
              link: {
                referenceToPage: {
                  pageName: 'housing-dunwoody'
                }
              }
            }
          ]
        },
        {
          cardLabel: 'Greater Midtown',
          cardImage: {
            file: {
              url: '//images.ctfassets.net/40v71zapbq14/5Zb4nVcSR5v3cR757HLg7R/eeb45ac89fe4fb28a5a1849e0ac20839/Greater_Midtown_33.jpg'
            }
          },
          cardContent: [
            {
              link: {
                referenceToPage: {
                  pageName: 'housing-greater-midtown'
                }
              }
            }
          ]
        },
        {
          cardLabel: 'Johns Creek',
          cardImage: {
            file: {
              url: '//images.ctfassets.net/40v71zapbq14/4OOkRrIRCFfo2lhstDGTDH/6d39f0f41bfed98f227d62c1fccca697/Johns_Creek_265.jpg'
            }
          },
          cardContent: [
            {
              link: {
                referenceToPage: {
                  pageName: 'housing-johnscreek'
                }
              }
            }
          ]
        },
        {
          cardLabel: 'Mabelton',
          cardImage: {
            file: {
              url: '//images.ctfassets.net/40v71zapbq14/1IvuYLAAiG5IxVFv7WAt8Y/7c537b9e89ab67a7251033ca79457b62/Mabelton_22.png'
            }
          },
          cardContent: [
            {
              link: {
                referenceToPage: {
                  pageName: 'housing-mabelton'
                }
              }
            }
          ]
        },
        {
          cardLabel: 'Marietta',
          cardImage: {
            file: {
              url: '//images.ctfassets.net/40v71zapbq14/6kkNvmZcqf8GlUr316RDwm/c328db0fd5fc96587e4c35a6f77887f9/Marietta_27.jpg'
            }
          },
          cardContent: [
            {
              link: {
                referenceToPage: {
                  pageName: 'housing-marietta'
                }
              }
            }
          ]
        },
        {
          cardLabel: 'Old Fourth Ward',
          cardImage: {
            file: {
              url: '//images.ctfassets.net/40v71zapbq14/5bDRPfyAlP6DWUYQtQdfjE/6287c07060b4fa7dec3cc47006f82037/Old_Fourth_23.jpg'
            }
          },
          cardContent: [
            {
              link: {
                referenceToPage: {
                  pageName: 'housing-oldfourthward'
                }
              }
            }
          ]
        },
        {
          cardLabel: 'Peachtree Corners',
          cardImage: {
            file: {
              url: '//images.ctfassets.net/40v71zapbq14/20HASRlSonLAlIh8jNp3fd/c416beadb31d55725ebef23714fa60ac/Peachtree_22.jpg'
            }
          },
          cardContent: [
            {
              link: {
                referenceToPage: {
                  pageName: 'housing-peachtreecorners'
                }
              }
            }
          ]
        },
        {
          cardLabel: 'Roswell',
          cardImage: {
            file: {
              url: '//images.ctfassets.net/40v71zapbq14/7tS7WbrDVQUTWulQohRwlx/1f380d823a03e2a985d48201e1901f9c/Roswell_18.jpg'
            }
          },
          cardContent: [
            {
              link: {
                referenceToPage: {
                  pageName: 'housing-rosewell'
                }
              }
            }
          ]
        },
        {
          cardLabel: 'Sandy Springs',
          cardImage: {
            file: {
              url: '//images.ctfassets.net/40v71zapbq14/41RZVxY3Y3elcQWji1kV70/3dea36c9ffd5cc35cd74f603e8e9eed6/Sandy_Springs_hero.jpg'
            }
          },
          cardContent: [
            {
              link: {
                referenceToPage: {
                  pageName: 'housing-sandy-springs'
                }
              }
            }
          ]
        },
        {
          cardLabel: 'Smyrna',
          cardImage: {
            file: {
              url: '//images.ctfassets.net/40v71zapbq14/6GieOTSv9pLrmsUeiHKh07/0b6e8e2f2abcbb7028279b3f0d855cdd/Smyrna_18.jpg'
            }
          },
          cardContent: [
            {
              link: {
                referenceToPage: {
                  pageName: 'housing-smyrna'
                }
              }
            }
          ]
        },
        {
          cardLabel: 'Vinings/Cumberland',
          cardImage: {
            file: {
              url: '//images.ctfassets.net/40v71zapbq14/6fn59BRQDDAnSMyAoS1w2u/68d3b3e500a7df4b300e2fcde7698cfe/Vinings_hero.png'
            }
          },
          cardContent: [
            {
              link: {
                referenceToPage: {
                  pageName: 'housing-vinings-cumberland'
                }
              }
            }
          ]
        }
      ],
      textColor: 'inherit',
      alignText: 'center'
    }
  }
};
