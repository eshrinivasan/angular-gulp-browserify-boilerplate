//HEAD 
(function(app) {
try { app = angular.module("angular-demo"); }
catch(err) { app = angular.module("angular-demo", []); }
app.run(["$templateCache", function($templateCache) {
"use strict";

$templateCache.put("app/ui-grid/grid.template.html","<div class=\"grid\" ng-transclude>\n" +
    "	{{onthescreen}}\n" +
    "</div>")

$templateCache.put("app/ui-grid/gridcolumns/grid.columns.template.html","<div class=\"ui-gridcolumns\">grid columns</div>")
}]);
})();