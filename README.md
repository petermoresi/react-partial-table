# react-partial-table

[React.js](http://facebook.github.io/react/) component to generate HTML table.

## Installation

    npm install react-partial-table

## Component

The table exposes two components:

1. Table
2. Column

You can import the components with:

    var Table = require('react-partial-table').Table;
    var Column = require('react-partial-table').Column;

To create a partial table use:

    <Table getRowAt={ (rowIndex) => return data[rowIndex] }
           startRow={1}
           numberOfRows={10}>
           <Column header="Col A" field={0} />
           <Column header="Col B" field={1} />
           <Column header="Col C" field={2} />
    </Table>
    
The table properties are:

- className: PropTypes.string
- keyField: PropTypes.string
- startRow: PropTypes.number
- numberOfRows: PropTypes.number
- interval: PropTypes.number
- showHeader: PropTypes.bool
- fixedHeader: PropTypes.bool
- headerRenderers: PropTypes.array<func>
- columnRenderers: PropTypes.array<func>
- getRowAt: PropTypes.func
- getRowClassName: PropTypes.func
- handleRowClick: PropTypes.func

The column properties are:

- headerRenderer: PropTypes.func (planned)
- cellRenderer: PropTypes.func
- field: PropTypes.string

## Running Software

    You need github.com/petehunt/rwb to build/run this software.

    Please see the rwb project page for more information about to use.
