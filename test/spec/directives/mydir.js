'use strict';

describe('Directive: myDir', function () {

  // load the directive's module
  beforeEach(module('artbymeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<my-dir></my-dir>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the myDir directive');
  }));
});
