/// <reference path="../../../assets/admin/libs/angular/angular.js" />
(function (app) {
    app.controller("productListController", productListController);

    productListController.$inject = ["$scope", "apiService", "notificationService","$ngBootbox"]

    function productListController($scope, apiService, notificationService, $ngBootbox) {

        $scope.products = [];

        $scope.getProducts = getProducts;

        $scope.keyword = "";

        $scope.search = search;

        $scope.deleteProduct = deleteProduct;

        function deleteProduct(id) {
            $ngBootbox.confirm("Bạn có chắc chắn muốn xóa?").then(function () {
                var config = {
                    params: {
                        id: id
                    }
                }
                apiService.del("api/product/delete", config, function () {
                    notificationService.displaySuccess("Xóa thành công.");
                    search();
                }, function () {
                    notificationService.displayError("Xóa không thành công.");
                })
            });
        }

        function search() {
            $scope.getProducts();
        }

        function getProducts(page) {
            page = page || 0;
            var config = {
                params: {
                    keyword: $scope.keyword,
                    page: page,
                    pageSize: 4
                }
            }
            apiService.get("api/product/getall", config, function (result) {
                if (result.data.TotalCount == 0) {
                    notificationService.displayWarning("Không tìm thấy bản ghi nào.");
                }
                $scope.products = result.data.Items;
                $scope.page = result.data.Page;
                $scope.pagesCount = result.data.TotalPages;
                $scope.totalCount = result.data.TotalCount;
            }, function () {
                console.log("load product failed.")
            });
        }
        $scope.getProducts();
    }
})(angular.module("bigshop.products"));