function PanelController($scope) {
  $scope.data = {
    social: {
      bookmarks: 1002,
      favorites: 131,
      comments: 21
    },
    incremented: {
      bookmarks: false,
      favorites: false
    }
  };
};
angular.module('sandboxApp').directive('panel', function () {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'panel/panel.html',
    controller: PanelController,
    bindToController: true
  }
})
