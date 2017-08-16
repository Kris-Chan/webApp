/**
 * Created by admin on 2017/8/16.
 */
//首页控制器
angular.module('app').controller('HomeController',['$scope','myHttp',function ($scope,myHttp) {
    $scope.homeTitle = '首页1';
    /*$http({
        url:'http://127.0.0.1/API/home.php',
        method:'jsonp'
    }).then(function (regs) {
        console.log(regs.data);

        $scope.dataList = regs.data;
    }).catch(function (err) {
        console.log(err);
    })*/
    myHttp.jsonp('http://127.0.0.1/API/home.php',null, function (regs) {
        $scope.dataList = regs.data;
    }, function (err) {
        console.log(err);
    })
}]);