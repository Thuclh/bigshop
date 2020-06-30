/// <reference path="../../../assets/admin/libs/angular/angular.js" />
(function (app) {
    app.filter("statusFillter", function () {
        return function (input) {
            if (input == true) {
                return "Kích hoạt";
            } else {
                return "Khóa";
            }
        }
    });
})(angular.module("bigshop.common"));