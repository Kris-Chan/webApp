/**
 * Created by admin on 2017/8/16.
 */
angular.module('app').controller('AppController',['$scope','$window','$location',function ($scope,$window,$location) {
    $scope.appTitle = '每日一刻';
    $scope.titleArray = ['首页','作者','栏目','我的'];
    $scope.title = '首页';
    $scope.index = 0;
    $scope.$on('tab_notifice', function (e, regs) {
        var index = regs.id;
        $scope.index = index;
        $scope.title = $scope.titleArray[index];
    });
    $scope.back = function () {
        // alert(1)
        $window.history.back();
    };
    $scope.location = $location;
    $scope.isShow = true;
    $scope.$watch('location.url()', function (newV, oldV) {
        // console.log(newV);
        var index = newV.toString().indexOf('list');
        if (index != -1) {
            $scope.isShow = true;
        }else {
            $scope.isShow = false;
        }
    })
}]);