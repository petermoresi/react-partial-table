/* Render Bootstrap Table
*/

import React, { Component, PropTypes } from 'react';
import CHOOSE from 'formula-choose';
import range from 'lodash.range';

export default class BootstrapTable extends Component {

  constructor() {
    super();
  }

  handleRowClicked(rowIndex) {
    this.props.updateSelectedRows(rowIndex)
  }

  render() {

    if(this.props.children) {
      this.props.columnRenderers = this.props.children.map((n) => {
        return n.props.cellRenderer || function(row) {
          return row[n.props.column];
        };
      })
    }

    return (
      <table className={'table' + (this.props.showBorder ? ' table-bordered' : '') +
        (this.props.enabledStriped ? ' table-striped' : '') +
        (this.props.enableHover ? ' table-hover' : '') }>
        <thead>
          <tr>
            { this.props.selectable ? <th></th> : null }
            { this.props.headers.map( (N, I) => <th key={I}>{ N }</th> ) }
          </tr>
        </thead>
        <tbody>
          { range(this.props.startRow, this.props.startRow + this.props.numberOfRows).map((rowIndex) => {

            let row = this.props.getRowAt(rowIndex-1);

            if (!row) { return null; }

            let isSelected = this.props.selectedRows.indexOf(rowIndex) > -1,
            isSuccess = this.props.successRows.indexOf(rowIndex) > -1,
            isDanger = this.props.dangerRows.indexOf(rowIndex) > -1,
            isWarning = this.props.warningRows.indexOf(rowIndex) > -1,
            mode = isSelected ? 1 : isSuccess ? 2 : isDanger ? 3 : isWarning ? 4 : 0;

            return (
              <tr key={rowIndex} onClick={ this.handleRowClicked.bind(this, rowIndex) }
                className={ CHOOSE( mode, 'active', 'success', 'danger', 'warning', '' ) }>
                { this.props.selectable ? <td><input type="checkbox" checked={ isSelected }/></td> : null }
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

BootstrapTable.propTypes = {
  keyField: PropTypes.string,
  selectable: PropTypes.bool,
  showBorder: PropTypes.bool,
  enableHover: PropTypes.bool,
  enabledStriped: PropTypes.bool,
  startRow: PropTypes.number,
  numberOfRows: PropTypes.number,
  rows: PropTypes.array,
  headers: PropTypes.array,
  columns: PropTypes.array,
  selectedRows: PropTypes.array,
  successRows: PropTypes.array,
  dangerRows: PropTypes.array,
  warningRows: PropTypes.array,
  updateSelectedRows: PropTypes.func
}

BootstrapTable.defaultProps = {
  keyField: "id",
  selectable: false,
  showBorder: false,
  enableHover: true,
  enableStriped: false,
  startRow: 1,
  numberOfRows: 10,
  selectedRows: [],
  successRows: [],
  dangerRows: [],
  warningRows: [],
  updateSelectedRows: () => {}
}
