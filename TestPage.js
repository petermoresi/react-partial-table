/**
* Copyright (c) 2015, Peter W Moresi
*/

import React from 'react';
import {Table, Column} from './Table';

import Colors from './CrayolaColors';

/* Write some great components about what data
 * this application presents and how it needs to be
 * organized.
 */
export default class TestPage extends React.Component {

  constructor() {
    super();
    this.state = {
      rows: Colors,
      startRow: 1,
      numberOfRows: 5
    };
  }

  handleStartRowChanged(event) {
    this.setState({ startRow: +event.currentTarget.value });
  }

  render() {
    return (
      <div>
        Start Row: <br/>
        <input type="number" className="form-control" min="1"
              onChange={ this.handleStartRowChanged.bind(this) } value={ this.state.startRow } />

        <h1>Default</h1>
        <Table
          startRow={this.state.startRow}
          numberOfRows={this.state.numberOfRows}
          fixedHeader={true}
          showHeader={true}
          getRowAt={ (rowIndex) => this.state.rows[rowIndex] }
          headerRenderers={['#', 'Color', 'Hex Value']}
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

        <h1>Fixed Header Off</h1>
        <Table
            fixedHeader={false}
            startRow={this.state.startRow}
            numberOfRows={this.state.numberOfRows*2}
            interval={2}
            showHeader={true}
            getRowAt={ (rowIndex) => this.state.rows[rowIndex] }
            headerRenderers={['#', 'Color', <span style={{color: 'red'}}>Hex Value</span>]}>
              <Column column="id" />
              <Column cellRenderer={(row) => `${row.name} (${row.hex})`}/>
              <Column cellRenderer={(row) => <span style={{
                paddingTop: 10,
                display: 'block',
                backgroundColor: row.hex,
                width: row.width + '%', height: '3em'
              }}></span>}/>
          </Table>


        <h1>Header Off</h1>
        <Table
            showHeader={false}
            startRow={this.state.startRow-1}
            numberOfRows={this.state.numberOfRows*2}
            interval={2}
            getRowAt={ (rowIndex) => this.state.rows[rowIndex] }
            headerRenderers={['#', 'Color', <span style={{color: 'green'}}>Hex Value</span>]}>
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
