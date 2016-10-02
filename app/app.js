require('angular')
require('./ui-grid')

var MainController = require('./controllers/MainController')

var app = angular.module('common.ui.elements', ['common.ui.elements.uiGrid', 'angular-demo'])

app.controller('MainController', ['$scope', MainController])
	 .run(function($templateCache, $compile, $rootScope){
	        var templatesHTML = $templateCache.get('app.templates');
	        $compile(templatesHTML)($rootScope); 
	    });