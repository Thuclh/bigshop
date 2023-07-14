﻿/// <reference path="../../../assets/admin/libs/angular/angular.js" />
(function () {
    angular.module("bigshop.product_categories", ["bigshop.common"]).config(config);

    config.$inject = ["$stateProvider", "$urlRouterProvider"];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state("product_categories", {
            url: "/product_categories",
            parent: "baseView",
            templateUrl: "/app/components/product_categories/productCategoryListView.html",
            controller: "productCategoryListController"
        }).state("add_product_category", {
            url: "/add_product_category",
            parent: "baseView",
            templateUrl: "/app/components/product_categories/productCategoryAddView.html",
            controller: "productCategoryAddController"
        }).state("edit_product_category", {
            url: "/edit_product_category/:id",
            parent: "baseView",
            templateUrl: "/app/components/product_categories/productCategoryEditView.html",
            controller: "productCategoryEditController"
        });
    }
})();