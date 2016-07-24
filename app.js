var angular = require('angular');

angular.module('sandboxApp', []);

angular.module('sandboxApp').directive('navigation', function() {
  return {
    templateUrl: "navigation.tpl.html",
    restrict: "E"
  };
});
