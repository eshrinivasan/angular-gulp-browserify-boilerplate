'use strict';

// @ngInject
module.exports = angular.module('common.ui.elements.uiGrid.gridrows', [])
    .controller('uiGridRowsControl', require('./grid.rows.directive.controller.js'))  
    .directive('uiGridRows', require('./grid.rows.directive.js'));