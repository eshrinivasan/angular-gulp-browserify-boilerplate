'use strict';

// @ngInject
module.exports = angular.module('common.ui.elements.uiGrid.gridcolumn', [])
    .controller('uiGridColumnControl', require('./grid.column.directive.controller.js'))
    .directive('uiGridColumn', require('./grid.column.directive.js'));
