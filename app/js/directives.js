(function () {
    'use strict';

    /* Directives */

    angular.module('myApp.directives', [])
        .directive('appVersion', ['version', function (version) {
            return function (scope, elm, attrs) {
                elm.text(version);
            };
        }]);

    // fix for ng-animate breaking carousel
    angular.module('ui.bootstrap.setNgAnimate', ['ngAnimate'])
        .directive('setNgAnimate', ['$animate', function ($animate) {
            return {
                link: function ($scope, $element, $attrs) {

                    $scope.$watch(function () {
                        return $scope.$eval($attrs.setNgAnimate, $scope);
                    }, function (valnew, valold) {
                        $animate.enabled(!!valnew, $element);
                    });


                }
            };
        }]);

}());