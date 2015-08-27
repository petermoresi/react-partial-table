import React, { Component, PropTypes } from 'react';

export default class Column extends Component {

  constructor() {
    super();
  }

  render() {
    // children are configuration only.
    // the render method in Table.js is all you need.
  }
}

Column.PropTypes = {
    cellRenderer: PropTypes.func,
    field: PropTypes.string
};

Column.DefaultTypes = {
    cellRenderer: (row) => { row[this.props.field]; },
    field: 'id'
};
