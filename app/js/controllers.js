(function () {
    'use strict';
    /* Controllers */
    angular.module('myApp.controllers', ['ui.bootstrap', 'ngAnimate', 'ui.bootstrap.setNgAnimate'])


        .controller('HomeCtrl', ['$scope',
            function ($scope) {
                $scope.appTitle = "Generic Company";
                $scope.title = "Home";
                $scope.headerImage = "img/homepage.jpg";
            }])

        .controller('AboutUsCtrl', ['$scope',
            function ($scope) {
                $scope.title = "About Us";
                $scope.headerImage = "img/default-page.jpg";
            }])

        .controller('ProductsCtrl', ['$scope',
            function ($scope) {
                $scope.title = "Products";
                $scope.headerImage = "img/default-page.jpg";
            }])

        .controller('BrochureRequestCtrl', ['$scope',
            function ($scope) {
                $scope.title = "Brochure Request";
                $scope.headerImage = "img/default-page.jpg";
            }])

        .controller('DownloadsCtrl', ['$scope',
            function ($scope) {
                $scope.headerImage = "img/default-page.jpg";
                $scope.title = "Downloads";
            }])

        .controller('StockistCtrl', ['$scope',
            function ($scope) {
                $scope.title = "Stockist";
                $scope.headerImage = "img/default-page.jpg";
            }])
        .controller('CarouselCtrl', ['$scope', '$animate', function ($scope, $animate) {
            $scope.animate = false;
            $scope.animateGlobal = true;

            $scope.$watch('animateGlobal', function (val) {
                //console.log('Set Global animation Enabled: ' + val);
                $animate.enabled(val);
            });
            //TODO hook up to service
            $scope.slides = [
                { image: 'img/products/large/Astwood_sml_RGB_72dpi.jpg', text: 'Astwood' },
                { image: 'img/products/large/Bodrum_sml_RGB_72dpi.jpg', text: 'Borrum' },
                { image: 'img/products/large/Elstow_sml_RGB_72dpi.jpg', text: 'Bozeat' }

            ];

        }])

        .controller('SearchCtrl', ['$scope',
            function ($scope) {
                var prompt = 'Search';
                $scope.searchTerm = prompt;
                $scope.searchDisabled = true;

                $scope.checkInput = function () {
                    // console.log( $scope.searchTerm);
                    //  console.log( "trim" + $scope.searchTerm.trim().length );
                    if ($scope.searchTerm === prompt) {
                        $scope.searchTerm = '';
                        $scope.searchDisabled = true;
                    }
                    else if (String($scope.searchTerm.trim()).length === 0) {
                        //console.log("length " + $scope.searchTerm.trim().length);
                        $scope.searchTerm = prompt;
                        $scope.searchDisabled = true;
                    }
                    else {
                        $scope.searchDisabled = false;
                    }
                };


                $scope.doSearch = function () {
                    //  console.log( 'searching for ' + $scope.searchTerm )
                };
            }])

        .controller('MenuController', ['$scope', '$location',
            function ($scope, $location) {
                $scope.isActive = function (viewLocation) {
                    return viewLocation === $location.path();
                };
            }]).

        controller('AccordionCtrl', ['$scope',
            function ($scope) {
                $scope.oneAtATime = true;

                $scope.groups = [
                    {
                        title: "Dynamic Group Header - 1",
                        content: "Dynamic Group Body - 1"
                    },
                    {
                        title: "Dynamic Group Header - 2",
                        content: "Dynamic Group Body - 2"
                    }
                ];

                $scope.items = ['Item 1', 'Item 2', 'Item 3'];

                $scope.addItem = function () {
                    var newItemNo = $scope.items.length + 1;
                    $scope.items.push('Item ' + newItemNo);
                };
            }]);
}());