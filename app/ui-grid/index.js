'use strict';

//require('./gridcolumns');
/*
require('./gridcolumn');
require('./gridrows');
*/

// @ngInject
angular.module('common.ui.elements.uiGrid', [])
    .directive('uiGrid', require('./grid.directive.js'));

/*
['common.ui.elements.uiGrid.gridcolumns']
,'common.ui.elements.uiGrid.uiGridcolumn',
	'common.ui.elements.uiGrid.uiGridrows'*/