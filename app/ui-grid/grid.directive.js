'use strict';

/**
 * @ngdoc directive
 * @name ui.elements:uiGrid
 *
 * @description
 * Wrapper for a grid in a table format.
 *
 * @restrict E
 * @element ANY
 *
 * @param {string} selectedTab the currently selected tab.
 *
  @example
 *
 *
 <doc:example>
 <doc:source>
     <ui-grid resource="/api/data.json">
        <ui-grid-columns>
            <ui-grid-column></ui-grid-column>
            <ui-grid-column></ui-grid-column>
            <ui-grid-column></ui-grid-column>
        </ui-grid-columns>
        <ui-grid-rows with-inline-editor></ui-grid-rows>
    </ui-grid>
 </doc:source>
 </doc:example>
 *
 */

// @ngInject
module.exports = function () {
    return {
        restrict: 'E',
        templateUrl: 'app/ui-grid/grid.template.html',
        link: function (scope, element, attrs) {
            console.log('linked Grid');
        },
        controller: ['$scope', function ($scope) {
            $scope.onthescreen = 'test value';   
        }]
    };
};
