(function() {

  'use strict';

  angular
    .module('myApp.services', [])
    .service('coffeeService', coffeeService)
    .service('userService', userService);

  coffeeService.$inject = ['$http'];
  userService.$inject = ['$http'];

  function coffeeService ($http) {
    /*jshint validthis: true */
    const baseURL = 'https://serene-springs-41881.herokuapp.com/coffee/';

    this.getAllCoffee = function() {
      return $http.get(baseURL);
    };

    this.getSingleCoffee = function (id) {
      return $http.get(`${baseURL}${id}`);
    };

    this.addCoffee = function (coffee) {
      return $http({
        method: 'POST',
        url: baseURL,
        data: coffee,
        headers: {'Content-Type': 'application/json'}
      });
    };
  }

  function userService ($http) {
    /*jshint validthis: true */
    const baseURL = 'https://serene-springs-41881.herokuapp.com/user/';
    this.login = function (user) {
      return $http({
        method: 'POST',
        url: baseURL + 'login',
        data: user,
        headers: {'Content-Type': 'application/json'}
      });
    };
    this.register = function(user) {
      return $http({
        method: 'POST',
        url: baseURL + 'register',
        data: user,
        headers: {'Content-Type': 'application/json'}
      });
    };
  }

})();
