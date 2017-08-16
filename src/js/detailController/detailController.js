/**
 * Created by admin on 2017/8/16.
 */
//详情控制器
angular.module('app').controller('DetailController',['$scope','$stateParams','$sce', function ($scope,$stateParams,$sce) {
    //设置授权
    $scope.html = $sce.trustAsHtml($stateParams.item);
}]);