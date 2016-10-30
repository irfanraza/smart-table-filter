/**
 * @name tableFilter
 * @description
 * This is a filter for departments data grid
 * it will allow records to show  only when selected=true
 *
 */
(function(angular) {
    var app = angular.module('smartTableApp.controllers');
    app.filter('tableFilter', function() {
        return function(items) {
            var filtered = [];
            angular.forEach(items, function(item) {
                //Check record if it has selected as true then add it to filtered list
                if (item.selected === true) {
                    filtered.push(item);
                }
            });
            return filtered;
        };
    });

})(angular);