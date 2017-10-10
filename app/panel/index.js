function PanelController($scope) {
  $scope.data = {
    'hello': 'world'
  }
};
angular.module('sandboxApp').directive('panel', function () {
  return {
    restrict: 'E',
    templateUrl: 'panel/panel.html',
    controller: PanelController
  }
})
