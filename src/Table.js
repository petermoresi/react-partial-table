/* Render HTML Table
*/

import React, { Component, PropTypes } from 'react';

function range(begin, end, interval = 1) {
  var a = [];
  for (let i = begin; i < (begin+end); i += interval) {
    a.push(i);
  }
  return a;
}
/* 
 * React Component to generate Table with callbacks
 * to ensure that the required functionality can be 
 * plugged in when you need it.
 */
export default class Table extends Component {

  constructor() {
    super();
  }

  handleRowClicked(rowIndex) {
    this.props.updateSelectedRows(rowIndex)
  }

  render() {

    // redirect children to columnRenderers array.
    if(this.props.children) {
      this.props.columnRenderers = this.props.children.map((n) => {
        return n.props.cellRenderer || function(row) {
          return row[n.props.column];
        };
      })
    }
      
    return (
      <table className={this.props.className}>
        <thead>
          <tr>
            { this.props.selectable ? <th>{ this.props.enableSelectAll ? <input type="checkbox" /> : '' }</th> : null }
            { this.props.headers.map( (N, I) => <th key={I}>{ N }</th> ) }
          </tr>
        </thead>
        <tbody>
          { range(this.props.startRow, this.props.numberOfRows, this.props.interval).map((rowIndex) => {

            let row = this.props.getRowAt(rowIndex-1);
            if (!row) { return <tr></tr>; }

            return (
              <tr key={rowIndex} onClick={ this.props.handleRowClick.bind(this, rowIndex) }
                className={ this.props.getRowClassName(rowIndex) }>
                { this.props.columnRenderers.map((col, i) =>
                  <td key={i + '-' + row[this.props.keyField]}>
                    { typeof col === "function" ? col(row) : row[col] }
                  </td>)
                }
              </tr>
            )}
          )}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  className: PropTypes.bool,
  keyField: PropTypes.string,
  startRow: PropTypes.number,
  numberOfRows: PropTypes.number,
  interval: PropTypes.number,
  headers: PropTypes.array,
  columnRenderers: PropTypes.array,
  getRowAt: PropTypes.func,
  getRowClassName: PropTypes.func,
  handleRowClick: PropTypes.func
}

Table.defaultProps = {
  className: '',
  keyField: "id",
  startRow: 1,
  numberOfRows: 10,
  interval: 1,
  columnRenderers: [],
  getRowAt: () => {},
  getRowClassName: () => {},
  handleRowClick: () => {},
}
