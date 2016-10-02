'use strict';

require('./gridcolumns');

// @ngInject
angular.module('common.ui.elements.uiGrid', ['common.ui.elements.uiGrid.uiGridcolumns'])
    .directive('uiGrid', require('./grid.directive.js'));
