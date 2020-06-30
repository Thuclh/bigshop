/// <reference path="../plugins/angular-1.7.9/angular.js" />
var myApp = angular.module("myModule", []);

myApp.controller("myController", myController);

function myController($scope) {
    $scope.message = "This is my message from controller";
}