angular.module('sandboxApp').directive('social', function() {
  return {
    restrict: 'E',
    scope: {
      theme: '='
    },
    templateUrl: 'social/social.html',
    link: function ($scope, el, attrs) {
      $scope.theme = attrs.theme;
    }
  }
})
