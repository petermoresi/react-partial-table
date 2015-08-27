import React, { Component, PropTypes } from 'react';

export default class TableConfig extends React.Component {

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    return true;
  }

  handleStartRowChanged(event) {
    this.props.updateStartRow( event.currentTarget.value );
  }

  handleNumberOfRowsChanged(event) {
    this.props.updateNumberOfRows( event.currentTarget.value );
  }

  render() {

    return (
      <div>
        <div className="col-sm-12 col-md-2">
          <div className="form-group">
            <label className="control-label" htmlFor="focusedInput">Start Row</label>
            <input type="number" className="form-control" min="1" max={ this.props.getTableLength() + 1 }
              onChange={ this.handleStartRowChanged.bind(this) } value={ this.props.startRow }/>
          </div>
        </div>
        <div className="col-sm-12 col-md-2">
          <div className="form-group">
            <label className="control-label" htmlFor="focusedInput">Number of Rows</label>
            <input className="form-control" min="1" max={ this.props.getTableLength() + 1 }
              type="number" onChange={ this.handleNumberOfRowsChanged.bind(this) }
              value={ this.props.numberOfRows }/>
          </div>
        </div>
      </div>
    );
  }
}

TableConfig.propTypes = {
  rows: PropTypes.array,
  startRow: PropTypes.number,
  numberOfRows: PropTypes.number,
  updateStartRow: PropTypes.func,
  updateNumberOfRows: PropTypes.func
}

TableConfig.defaultProps = {
  rows: [],
  startRow: 1,
  numberOfRows: 10,
  updateStartRow: () => {},
  updateNumberOfRows: () => {}
}
