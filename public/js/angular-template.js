//HEAD 
(function(app) {
try { app = angular.module("angular-demo"); }
catch(err) { app = angular.module("angular-demo", []); }
app.run(["$templateCache", function($templateCache) {
"use strict";

$templateCache.put("app/ui-grid/grid.template.html","<div class=\"grid\">\n" +
    "	{{onthescreen}}\n" +
    "</div>")
}]);
})();