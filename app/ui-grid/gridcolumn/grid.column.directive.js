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
module.exports = function ($timeout) {
    return {
        restrict: 'E',
        templateUrl: 'public/resources/angular-sap-ui-elements/ui-elements/ui-grid/gridcolumn/grid.column.template.html',
        link: function (scope, element, attrs) {
            console.log('linked Grid Column');
        }
       
    };
};