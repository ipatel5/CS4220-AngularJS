const myApp = angular.module('myApp', ['ngRoute'])
.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}])
.config(['$routeProvider', function($routeProvider) {


        $routeProvider
        .when('/', {
        templateUrl: 'views/main.html'
           
        })
            .when('/signup', {
                templateUrl: 'views/signup.html',
                controller: 'signup'
            })
            
            .otherwise({
                redirectTo: '/'
            })

    }])
