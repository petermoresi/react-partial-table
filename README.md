# react-table-for-bootstrap

[React.js](http://facebook.github.io/react/) component to generate table with [Bootstrap](http://getbootstrap.com) CSS classes.

## Installation

    npm install react-table-for-bootstrap

## Components

1. BootstrapTable

    The main component in the project.

2. TableConfig

    A bootstrap row with 6 columns and table property view/edit controls.

## Simple Example

    var BootstrapTable = require('react-table-for-bootstrap').Table
    <BootstrapTable
          rows={[{ name: 'ref', hex: '#F00' },
                 { name: 'green', hex: '#0F0' },
                 { name: 'blue', hex: '#00F' }]}
          headers={['Color', 'Hex Value']}
          columnRenderers={[
                    (row) => `${row.name} (${row.hex})`,
                    (row) => <span style={{
                      'padding-top': 10,
                      'display': 'block',
                      'background-color': row.hex,
                      'width': row.width + '%', height: '3em'
                    }}></span>]
                  } />

Alternatively, you an use Columns to specify how to render cells.

      // ES6 Example
      import {Table, Column} from 'react-table-for-bootstrap';
      <Table
        headers={['#', 'Color', 'Hex Value']}
        startRow={this.state.startRow}
        enableHover={true}
        enableStriped={false}
        showBorder={true}
        numberOfRows={this.state.numberOfRows}
        successRows={this.state.successRows}
        dangerRows={this.state.dangerRows}
        warningRows={this.state.warningRows}
        selectedRows={this.state.selectedRows}
        getRowAt={ (rowIndex) => this.state.rows[rowIndex] }
        columnRenderers={[]}>
          <Column column="id" />
          <Column cellRenderer={(row) => `${row.name} (${row.hex})`}/>
          <Column cellRenderer={(row) => <span style={{
            paddingTop: 10,
            display: 'block',
            backgroundColor: row.hex,
            width: row.width + '%', height: '3em'
          }}></span>}/>
      </Table>


See demo directory for more complex example.
