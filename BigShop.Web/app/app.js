﻿/// <reference path="../assets/admin/libs/angular/angular.js" />
(function () {
    angular.module("bigshop",
        ["bigshop.products",
            "bigshop.product_categories",
            "bigshop.common"])
        .config(config)
        .config(configAuthentication);

    config.$inject = ["$stateProvider", "$urlRouterProvider"];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("baseView", {
                url: "",
                templateUrl: "/app/shared/baseView/baseView.html",
                abstract: true
            })
            .state("login", {
                url: "/login",
                templateUrl: "/app/components/login/loginView.html",
                controller: "loginController"
            })
            .state("home", {
                url: "/admin",
                parent: "baseView",
                templateUrl: "/app/components/home/homeView.html",
                controller: "homeController"
            });
        $urlRouterProvider.otherwise("/login");
    }

    function configAuthentication($httpProvider) {
        $httpProvider.interceptors.push(function ($q, $location) {
            return {
                request: function (config) {

                    return config;
                },
                requestError: function (rejection) {

                    return $q.reject(rejection);
                },
                response: function (response) {
                    if (response.status == "401") {
                        $location.path('/login');
                    }
                    //the same response/modified/or a new one need to be returned.
                    return response;
                },
                responseError: function (rejection) {

                    if (rejection.status == "401") {
                        $location.path('/login');
                    }
                    return $q.reject(rejection);
                }
            };
        });
    }
})();