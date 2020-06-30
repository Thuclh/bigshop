/// <reference path="../../../assets/admin/libs/angular/angular.js" />
(function (app) {
    app.controller("productEditController", productEditController);

    productEditController.$inject = ["apiService", "$scope", "notificationService", "$state", "commonService","$stateParams"];

    function productEditController(apiService, $scope, notificationService, $state, commonService, $stateParams) {
        $scope.product = {
            //CreatedDate: new Date(),
            //Status: true
        }

        $scope.GetSeoTitle = GetSeoTitle;
        $scope.moreImages = [];

        function GetSeoTitle() {
            $scope.product.Alias = commonService.getSeoTitle($scope.product.Name);
        }

        $scope.ckeditorOptions = {
            languague: 'vi',
            height: '200px'
        }

        $scope.UpdateProduct = UpdateProduct;

        function UpdateProduct() {
            $scope.product.MoreImages = JSON.stringify($scope.moreImages);
            apiService.put("api/product/update", $scope.product, function (result) {
                notificationService.displaySuccess(result.data.Name + " đã được cập nhật.");
                $state.go("products");
            }, function (error) {
                notificationService.displayError("Cập nhật không thành công.");
            });
        }

        function loadProductCategory() {
            apiService.get("api/productcategory/getallparents", null, function (result) {
                $scope.productCategories = result.data;
            }, function () {
                console.log("can not load parent");
            });
        }

        $scope.ChooseImage = function () {
            var finder = new CKFinder();
            finder.selectActionFunction = function (fileUrl) {
                $scope.$apply(function () {
                    $scope.product.Image = fileUrl;
                })
            }
            finder.popup();
        }

        $scope.ChooseMoreImage = function () {
            var finder = new CKFinder();
            finder.selectActionFunction = function (fileUrl) {
                $scope.$apply(function () {
                    $scope.moreImages.push(fileUrl);
                })

            }
            finder.popup();
        }

        function loadProductDetail() {
            apiService.get("api/product/getbyid/" + $stateParams.id, null, function (result) {
                $scope.product = result.data;
                $scope.moreImages = JSON.parse($scope.product.MoreImages);
            }, function (error) {
                notificationService.displayError(error.data);
            });
        }

        loadProductCategory();
        loadProductDetail();
    }

})(angular.module("bigshop.products"));