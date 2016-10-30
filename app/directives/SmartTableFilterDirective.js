/**
 * @name smartTableFilter
 * @description
 * This is a directive for departments data grid
 * When user clicks on filter icon it brings up a filter box where user can choose/search and filter from large abmount of data
 * 
 * @sample code
 * <smart-table-filter label="Filter data" filterData='filteredData'></smart-table-filter>
 *
 */
(function(angular) {
    var app = angular.module('smartTableApp.directives', []);

    app.directive('smartTableFilter', function() {
        return {
            restrict: 'EA',
            replace: true,
            scope: {
                originalRecords: '=filterdata'
            },
            link: function(scope, element, attrs) {
                scope.label = attrs.label;
            },
            controller: function($scope, $element) {

                //data
                $scope.records = angular.copy($scope.originalRecords);
                $scope.selectedAll = true;
                $scope.resultStatus = 'matches';
                $scope.searchBox = {
                    "name": ''
                };

                //Update select all checkbox state when user does manula interactions
                $scope.updateSelectAll = function() {
                    var selectAllValue = true;
                    if (typeof $scope.searchBox.name === "undefined" || ($scope.searchBox.name == "")) {
                        angular.forEach($scope.records, function(record) {
                            selectAllValue = selectAllValue && record.selected;
                        });
                    } else {
                        angular.forEach($scope.records, function(record) {
                            var recordName = record.name.toLowerCase();
                            if (recordName.indexOf($scope.searchBox.name) >= 0) {
                                selectAllValue = selectAllValue && record.selected;
                            }
                        });
                    }

                    $scope.selectedAll = selectAllValue;
                };

                //Hide and show filter box
                $scope.togglePane = function() {
                    if ($scope.open) {
                        $scope.open = false;
                    } else {
                        $scope.open = true;
                        $scope.records = angular.copy($scope.originalRecords);
                    }
                };

                //Select all records when clicked on select all checkbox
                $scope.checkAll = function() {
                    if (!$scope.selectedAll) {
                        $scope.selectedAll = true;
                    } else {
                        $scope.selectedAll = false;
                    }

                    if (typeof $scope.searchBox.name === "undefined" || ($scope.searchBox.name == "")) {
                        angular.forEach($scope.records, function(record) {
                            record.selected = $scope.selectedAll;
                        });
                    } else {
                        angular.forEach($scope.records, function(record) {
                            var recordName = record.name.toLowerCase();
                            if (recordName.indexOf($scope.searchBox.name) >= 0) {
                                record.selected = $scope.selectedAll;
                            }
                        });
                    }
                };

                //Search in the records as user starts typing in search box
                $scope.search = function() {
                    var resultStatus = false;
                    if (typeof $scope.searchBox.name !== "undefined" && ($scope.searchBox.name !== "")) {
                        angular.forEach($scope.records, function(record) {
                            var recordName = record.name.toLowerCase();
                            if (recordName.indexOf($scope.searchBox.name) >= 0) {
                                record.selected = true;
                            } else {
                                record.selected = false;
                            }
                            resultStatus = resultStatus || record.selected;
                        });
                    } else {
                        angular.forEach($scope.records, function(record) {
                            record.selected = true;
                        });
                        resultStatus = true;
                    }
                    $scope.selectedAll = true;
                    $scope.resultStatus = (resultStatus) ? 'matches' : 'noMatches';
                };

                //Close filter box when clicked on close or cancel button				    
                $scope.filterCancel = function() {
                    /* Toggle pane */
                    $scope.togglePane();
                };

                //show records as per selection
                $scope.filterApply = function() {
                    /* Toggle pane */
                    $scope.togglePane();
                    console.log($scope.records);
                    $scope.originalRecords = angular.copy($scope.records);
                };

            },
            template: '<div class="dataFilter">' +
                '<div class="filterLink">' +
                '<span class="filterLabel">{{label}}</span>' +
                '<span class="glyphicon glyphicon-filter" ng-click="refresh(); togglePane()" style="cursor:pointer"></span>' +
                '</div>' +
                '<div class="filterBox" ng-class="{active: open}">' +
                '<div class="filterBody">' +
                '<div class="box leftUpArrow">' +
                '<div class="boxBody">' +
                '<div class="searchBox">' +
                '<input type="text" ng-keyup="search()" placeholder="Search By Keyword" ng-model="searchBox.name" class="ng-valid ng-dirty noClear" name="search">' +
                '<span class="closeLink" ng-click="filterCancel()" >Close</span>' +
                '</div>' +
                '<div class="list">' +
                '<div class="checkboxes" ng-switch on="resultStatus">' +
                '<input ng-switch-when="matches" type="checkbox" id="selectAll" ng-model="selectedAll" ng-click="checkAll()" /><label for="selectAll" ng-switch-when="matches" >Select All</label>' +
                '<span ng-switch-when="noMatches">No Matches</span>' +
                '</div>' +
                '<div class="restAllChcekboxes">' +
                '<div class="checkboxes" ng-repeat="record in records | filter:searchBox" >' +
                '<input type="checkbox" id="{{record.name}}" ng-model="record.selected" ng-change="updateSelectAll()" /><label for="{{record.name}}">{{record.name}}</label>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="buttons">' +
                '<div class="cancelButton">' +
                '<button type="submit" class="btn btn-primary actionButtons filterButton ng-binding" ng-click="filterCancel()" >Cancel</button>' +
                '</div>' +
                '<div class="okButton">' +
                '<button type="submit" class="btn btn-primary actionButtons filterButton ng-binding" ng-click="filterApply()" >OK</button>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>',
            replace: true
        };
    });


})(angular);