import React from 'react';
import TableComponent from '../components/table';

export default {
  title: 'Table Component',
  component: TableComponent,
  argTypes: {
    data: {
      name: 'Data',
      type: {},
      defaultValue: {
        id: 'b25a9d8d-80ef-5a24-ae78-44611f3a3195',
        entryTitle: 'Demo Table',
        description: 'This is a demo table',
        cellPadding: 'Normal',
        fixedHeader: true,
        headerBackground: '#dddddd',
        headerCellColor: '#000000',
        rowHighlightColor: '#ddd',
        evenCellBackground: '#12D088 ',
        tableHeader: [
          'Name',
          'Location',
          'Salary'
        ],
        tableWithPagination: true,
        tableRows: [
          {
            id: '94fcbff3-844a-559b-b08d-862ed335fcfe',
            cellValues: [
              'Adam Smith',
              'England',
              '10000'
            ]
          },
          {
            id: '6e9d906d-3373-535f-b713-cb8b270d8b49',
            cellValues: [
              'John',
              'London',
              '10000'
            ]
          },
          {
            id: '68ba3deb-4ec1-5213-ae99-cf94f94b3c0d',
            cellValues: [
              'Test',
              'USA',
              '20000'
            ]
          },
          {
            id: 'd32f2404-7c40-53ac-ac75-cf06996a2602',
            cellValues: [
              'Peter',
              'Denmark',
              '203999'
            ]
          },
          {
            id: '1554a23d-4091-5b2b-a27a-af5ab525efe1',
            cellValues: [
              'Allen',
              'India',
              '29999'
            ]
          },
          {
            id: '70b6208e-7344-593e-af95-ed0c8d97ada4',
            cellValues: [
              'Adam Smith',
              'England',
              '10000'
            ]
          },
          {
            id: '6e9d906d-3373-535f-b713-cb8b270d8b49',
            cellValues: [
              'John',
              'London',
              '10000'
            ]
          },
          {
            id: '68ba3deb-4ec1-5213-ae99-cf94f94b3c0d',
            cellValues: [
              'Test',
              'USA',
              '20000'
            ]
          },
          {
            id: 'd32f2404-7c40-53ac-ac75-cf06996a2602',
            cellValues: [
              'Peter',
              'Denmark',
              '203999'
            ]
          },
          {
            id: '1554a23d-4091-5b2b-a27a-af5ab525efe1',
            cellValues: [
              'Allen',
              'India',
              '29999'
            ]
          },
          {
            id: '70b6208e-7344-593e-af95-ed0c8d97ada4',
            cellValues: [
              'Adam Smith',
              'England',
              '10000'
            ]
          },
          {
            id: '6e9d906d-3373-535f-b713-cb8b270d8b49',
            cellValues: [
              'John',
              'London',
              '10000'
            ]
          }
        ],
        sys: {
          type: 'Entry',
          contentType: {
            sys: {
              id: 'compTable'
            }
          }
        },
        textColor: 'inherit',
        alignText: 'Left'
      }
    }
  }
};

export const Template = (args) => <TableComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    id: 'b25a9d8d-80ef-5a24-ae78-44611f3a3195',
    entryTitle: 'Demo Table',
    description: 'This is a demo table',
    cellPadding: 'Normal',
    fixedHeader: true,
    headerBackground: '#dddddd',
    headerCellColor: '#000000',
    rowHighlightColor: '#ddd',
    evenCellBackground: '#12D088 ',
    tableHeader: [
      'Name',
      'Location',
      'Salary'
    ],
    tableWithPagination: true,
    tableRows: [
      {
        id: '94fcbff3-844a-559b-b08d-862ed335fcfe',
        cellValues: [
          'Adam Smith',
          'England',
          '10000'
        ]
      },
      {
        id: '6e9d906d-3373-535f-b713-cb8b270d8b49',
        cellValues: [
          'John',
          'London',
          '10000'
        ]
      },
      {
        id: '68ba3deb-4ec1-5213-ae99-cf94f94b3c0d',
        cellValues: [
          'Test',
          'USA',
          '20000'
        ]
      },
      {
        id: 'd32f2404-7c40-53ac-ac75-cf06996a2602',
        cellValues: [
          'Peter',
          'Denmark',
          '203999'
        ]
      },
      {
        id: '1554a23d-4091-5b2b-a27a-af5ab525efe1',
        cellValues: [
          'Allen',
          'India',
          '29999'
        ]
      },
      {
        id: '70b6208e-7344-593e-af95-ed0c8d97ada4',
        cellValues: [
          'Adam Smith',
          'England',
          '10000'
        ]
      },
      {
        id: '6e9d906d-3373-535f-b713-cb8b270d8b49',
        cellValues: [
          'John',
          'London',
          '10000'
        ]
      },
      {
        id: '68ba3deb-4ec1-5213-ae99-cf94f94b3c0d',
        cellValues: [
          'Test',
          'USA',
          '20000'
        ]
      },
      {
        id: 'd32f2404-7c40-53ac-ac75-cf06996a2602',
        cellValues: [
          'Peter',
          'Denmark',
          '203999'
        ]
      },
      {
        id: '1554a23d-4091-5b2b-a27a-af5ab525efe1',
        cellValues: [
          'Allen',
          'India',
          '29999'
        ]
      },
      {
        id: '70b6208e-7344-593e-af95-ed0c8d97ada4',
        cellValues: [
          'Adam Smith',
          'England',
          '10000'
        ]
      },
      {
        id: '6e9d906d-3373-535f-b713-cb8b270d8b49',
        cellValues: [
          'John',
          'London',
          '10000'
        ]
      }
    ],
    sys: {
      type: 'Entry',
      contentType: {
        sys: {
          id: 'compTable'
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
    id: 'b25a9d8d-80ef-5a24-ae78-44611f3a3195',
    entryTitle: 'Demo Table',
    description: 'This is a demo table',
    cellPadding: 'Normal',
    fixedHeader: true,
    headerBackground: '#000000',
    headerCellColor: '#ffffff',
    rowHighlightColor: '#ddd',
    evenCellBackground: '#f5f5f5 ',
    tableHeader: [
      'Name',
      'Location',
      'Salary'
    ],
    tableWithPagination: true,
    tableRows: [
      {
        id: '94fcbff3-844a-559b-b08d-862ed335fcfe',
        cellValues: [
          'Adam Smith',
          'England',
          '10000'
        ]
      },
      {
        id: '6e9d906d-3373-535f-b713-cb8b270d8b49',
        cellValues: [
          'John',
          'London',
          '10000'
        ]
      },
      {
        id: '68ba3deb-4ec1-5213-ae99-cf94f94b3c0d',
        cellValues: [
          'Test',
          'USA',
          '20000'
        ]
      },
      {
        id: 'd32f2404-7c40-53ac-ac75-cf06996a2602',
        cellValues: [
          'Peter',
          'Denmark',
          '203999'
        ]
      },
      {
        id: '1554a23d-4091-5b2b-a27a-af5ab525efe1',
        cellValues: [
          'Allen',
          'India',
          '29999'
        ]
      },
      {
        id: '70b6208e-7344-593e-af95-ed0c8d97ada4',
        cellValues: [
          'Adam Smith',
          'England',
          '10000'
        ]
      },
      {
        id: '6e9d906d-3373-535f-b713-cb8b270d8b49',
        cellValues: [
          'John',
          'London',
          '10000'
        ]
      },
      {
        id: '68ba3deb-4ec1-5213-ae99-cf94f94b3c0d',
        cellValues: [
          'Test',
          'USA',
          '20000'
        ]
      },
      {
        id: 'd32f2404-7c40-53ac-ac75-cf06996a2602',
        cellValues: [
          'Peter',
          'Denmark',
          '203999'
        ]
      },
      {
        id: '1554a23d-4091-5b2b-a27a-af5ab525efe1',
        cellValues: [
          'Allen',
          'India',
          '29999'
        ]
      },
      {
        id: '70b6208e-7344-593e-af95-ed0c8d97ada4',
        cellValues: [
          'Adam Smith',
          'England',
          '10000'
        ]
      },
      {
        id: '6e9d906d-3373-535f-b713-cb8b270d8b49',
        cellValues: [
          'John',
          'London',
          '10000'
        ]
      }
    ],
    sys: {
      type: 'Entry',
      contentType: {
        sys: {
          id: 'compTable'
        }
      }
    },
    textColor: 'inherit',
    alignText: 'Left'
  }
};
