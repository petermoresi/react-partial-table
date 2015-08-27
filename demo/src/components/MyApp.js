/**
* Copyright (c) 2015, Peter W Moresi
*/

import React from 'react';
import {Table, Column, TableConfig} from 'reactive-table';

import Colors from './CrayolaColors';

/* Write some great components about what data
 * this application presents and how it needs to be
 * organized.
 */
export default class MyApp extends React.Component {

  constructor() {
    super();
    this.state = {
      rows: Colors,
      startRow: 1,
      numberOfRows: 5
    };
  }

  render() {
    return (
      <div>

        <TableConfig
          getTableLength={() => this.state.rows.length }
          startRow={this.state.startRow}
          numberOfRows={this.state.numberOfRows}
          updateStartRow={ (value) => { this.setState({ startRow: +value }) }.bind(this) }
          updateNumberOfRows={ (value) => { this.setState({ numberOfRows: +value }) }.bind(this) } />

        <Table
          headers={['#', 'Color', 'Hex Value']}
          startRow={this.state.startRow}
          numberOfRows={this.state.numberOfRows}
          getRowAt={ (rowIndex) => this.state.rows[rowIndex] }
          columnRenderers={[
            (row) => row.id,
            (row) => `${row.name} (${row.hex})`,
            (row) => <span style={{
              paddingTop: 10,
              display: 'block',
              backgroundColor: row.hex,
              width: row.width + '%', height: '3em'
            }}></span>]
          }
          />

        <Table
            headers={['#', 'Color', 'Hex Value']}
            startRow={this.state.startRow}
            numberOfRows={this.state.numberOfRows*2}
            interval={2}
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


        <Table
            headers={['#', 'Color', 'Hex Value']}
            startRow={this.state.startRow-1}
            numberOfRows={this.state.numberOfRows*2}
            interval={2}
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

      </div>
    );
  }
}
