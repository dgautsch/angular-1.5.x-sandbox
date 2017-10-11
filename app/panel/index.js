function PanelController ($scope) {
  $scope.$on('SocialInteraction', function (event, value) {
    console.log(event, value);
  });
  $scope.data = {
    social: {
      bookmarks: 1002,
      favorites: 131,
      comments: 21
    },
    incremented: {
      bookmarks: false,
      favorites: false
    },
    active: {
      bookmarks: true,
      comments: true,
      favorites: true
    }
  };
}
angular.module('sandboxApp').directive('panel', function () {
  return {
    restrict: 'E',
    scope: {
      theme: '@'
    },
    templateUrl: 'panel/panel.html',
    controller: PanelController,
    bindToController: true
  };
});
