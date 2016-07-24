/**
 * navigation.directive.js
 * @type directive
 *
 */

module.exports = function() {
  return {
    controller: 'NavigationCtrl',
    controllerAs:'nav',
    restrict: 'E',
    templateUrl: 'navigation/navigation.tpl.html'
  };
};
