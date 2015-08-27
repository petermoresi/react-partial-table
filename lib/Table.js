/* Render HTML Table
*/

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function range(begin, end) {
  var interval = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

  var a = [];
  for (var i = begin; i < begin + end; i += interval) {
    a.push(i);
  }
  return a;
}
/*
* React Component to generate Table with callbacks
* to ensure that the required functionality can be
* plugged in when you need it.
*/

var Table = (function (_Component) {
  _inherits(Table, _Component);

  function Table() {
    _classCallCheck(this, Table);

    _get(Object.getPrototypeOf(Table.prototype), 'constructor', this).call(this);
  }

  _createClass(Table, [{
    key: 'handleRowClicked',
    value: function handleRowClicked(rowIndex) {
      this.props.updateSelectedRows(rowIndex);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      // redirect children to columnRenderers array.
      if (this.props.children) {
        this.props.columnRenderers = this.props.children.map(function (n) {
          return n.props.cellRenderer || function (row) {
            return row[n.props.column];
          };
        });
      }

      var header = _react2['default'].createElement(
        'thead',
        null,
        _react2['default'].createElement(
          'tr',
          null,
          this.props.selectable ? _react2['default'].createElement(
            'th',
            null,
            this.props.enableSelectAll ? _react2['default'].createElement('input', { type: 'checkbox' }) : ''
          ) : null,
          this.props.headerRenderers.map(function (col, I) {
            return _react2['default'].createElement(
              'th',
              { key: I },
              typeof col === 'function' ? col(I) : col
            );
          })
        )
      );

      return _react2['default'].createElement(
        'table',
        { className: this.props.className },
        this.props.showHeader && (this.props.fixedHeader || this.props.startRow < 2) ? header : undefined,
        _react2['default'].createElement(
          'tbody',
          null,
          range(this.props.startRow, this.props.numberOfRows, this.props.interval).map(function (rowIndex) {

            var row = _this.props.getRowAt(rowIndex - 1);
            if (!row) {
              return _react2['default'].createElement('tr', null);
            }

            return _react2['default'].createElement(
              'tr',
              { key: rowIndex, onClick: _this.props.handleRowClick.bind(_this, rowIndex),
                className: _this.props.getRowClassName(rowIndex) },
              _this.props.columnRenderers.map(function (col, i) {
                return _react2['default'].createElement(
                  'td',
                  { key: i + '-' + row[_this.props.keyField] },
                  typeof col === 'function' ? col(row) : row[col]
                );
              })
            );
          })
        )
      );
    }
  }]);

  return Table;
})(_react.Component);

exports['default'] = Table;

Table.propTypes = {
  className: _react.PropTypes.string,
  keyField: _react.PropTypes.string,
  startRow: _react.PropTypes.number,
  numberOfRows: _react.PropTypes.number,
  interval: _react.PropTypes.number,
  showHeader: _react.PropTypes.bool,
  fixedHeader: _react.PropTypes.bool,
  columnRenderers: _react.PropTypes.array,
  getRowAt: _react.PropTypes.func,
  getRowClassName: _react.PropTypes.func,
  handleRowClick: _react.PropTypes.func
};

Table.defaultProps = {
  className: '',
  keyField: 'id',
  startRow: 1,
  numberOfRows: 10,
  interval: 1,
  showHeader: true,
  fixedHeader: true,
  columnRenderers: [],
  getRowAt: function getRowAt() {},
  getRowClassName: function getRowClassName() {},
  handleRowClick: function handleRowClick() {}
};
module.exports = exports['default'];
