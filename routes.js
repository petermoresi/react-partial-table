'use strict';

var TestPage = require('./TestPage');
var React = require('react');
var {Route} = require('react-router');

module.exports = <Route handler={TestPage} />;
