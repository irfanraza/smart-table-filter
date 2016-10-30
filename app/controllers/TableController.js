/**
 * @name TableController
 * @description
 * This controller is for data grid that shows department list
 *
 */

(function(angular){
	
var app = angular.module('smartTableApp.controllers');

app.controller('TableController',function($scope){

	//Sample data feed for department (should come from back-end)
    $scope.filteredData = [{"name":"Computer Science", "budget":"50k", "phone":"(000) 000-0000", "selected":true},
	{"name":"Electronics", "budget":"70k", "phone":"(000) 000-0000", "selected":true},
	{"name":"Instrumentation", "budget":"28k", "phone":"(000) 000-0000", "selected":true},
	{"name":"Civil Engg", "budget":"35k", "phone":"(000) 000-0000", "selected":true},
	{"name":"Mechanical", "budget":"45k", "phone":"(000) 000-0000", "selected":true},
	{"name":"Information tech.", "budget":"50k", "phone":"(000) 000-0000", "selected":true},
	{"name":"Mass Communication", "budget":"20k", "phone":"(000) 000-0000", "selected":true},
	{"name":"Arts", "budget":"30k", "phone":"(000) 000-0000", "selected":true},
	{"name":"Medical", "budget":"40k", "phone":"(000) 000-0000", "selected":true},
	{"name":"Robotics", "budget":"80k", "phone":"(000) 000-0000", "selected":true},
	{"name":"Research", "budget":"100k", "phone":"(000) 000-0000", "selected":true}];

	// Any custom logic for table goes here
	
});

})(angular);