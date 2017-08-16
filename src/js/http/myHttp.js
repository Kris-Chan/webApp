/**
 * Created by admin on 2017/8/16.
 */
angular.module('app').service('myHttp',['$http',function ($http) {
    this.jsonp = function (url, params, success,error) {
        $http({
            url:url,
            method:'jsonp',
            params:params
        }).then(function (regs) {
            // console.log(regs.data);
            if (success) success(regs)
        }).catch(function (err) {
            if (error) error(err)
        })
    }
}])