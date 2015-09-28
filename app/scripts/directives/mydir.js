'use strict';

/**
 * @ngdoc directive
 * @name artbymeApp.directive:myDir
 * @description
 * # myDir
 */
angular.module('artbymeApp')
  .directive('myDir', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the myDir directive');
      }
    };
  });
