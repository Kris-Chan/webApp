/**
 * Created by admin on 2017/8/16.
 */
angular.module('app').config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state('home',{
        url:'/home',
        views:{
            home:{
                templateUrl:'../views/home_tpl.html',
                controller:'HomeController'
            },
            author:{
                template:'<h1>author</h1>'
            },
            content:{
                template: '<h1>content</h1>'
            },
            my:{
                template:'<h1>my</h1>'
            }
        }
    }).state('home.list',{
        url:'/list',
        templateUrl:'../views/list_tpl.html'
    }).state('home.detail',{
        url:'/detail/:item',
        template:'<div ng-bind-html="html" class="detail_content"></div>',
        controller:'DetailController'
    });
    // 设置默认
    $urlRouterProvider.otherwise('/home/list');
}]);
//设置白名单
angular.module('app').config(['$sceDelegateProvider', function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://127.0.0.1/API/**'
    ])
}]);