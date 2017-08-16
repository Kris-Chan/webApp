/**
 * Created by admin on 2017/8/16.
 */
angular.module('app').directive('tabbar', function () {
    return {
        restrict:'EA',
        templateUrl:'../views/tabbar_tpl.html',
        controller:['$scope', function ($scope) {
            $scope.tabChange = function (index) {
                $scope.$emit('tab_notifice',{id:index})
            }
        }]
    }
});