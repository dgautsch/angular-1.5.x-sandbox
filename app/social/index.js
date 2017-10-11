angular.module('sandboxApp').controller('SocialController', require('./social.controller.js'));
angular.module('sandboxApp').service('SocialService', require('./social.service.js'));
angular.module('sandboxApp')
.directive('cnSocial', function () {
  return {
    restrict: 'E',
    scope: {
      theme: '@',
      config: '='
    },
    templateUrl: 'social/social.html',
    controller: 'SocialController',
    controllerAs: '$ctrl',
    bindToController: true
  };
});
