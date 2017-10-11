/**
 * social.controller.js
 * @type controller
 *
 */

module.exports = ['$scope', '$log', function ($scope, $log) {
  this.social = this.config.social;
  this.incremented = this.config.incremented;
  this.active = this.config.active;

  this.handleSocialClick = function ($event, $id, feature) {
    if (this.incremented[feature]) {
      this.social[feature]--;
      this.incremented[feature] = false;
      $scope.$emit('SocialInteraction', [feature, -1]);
      this.updateOmniture({
        id: $id,
        feature: feature,
        action: 'decrement'
      });
      return;
    }
    this.social[feature]++;
    this.incremented[feature] = true;
    $scope.$emit('SocialInteraction', [feature, 1]);
    this.updateOmniture({
      id: $id,
      feature: feature,
      action: 'increment'
    });
  };

  this.updateOmniture = function (event) {
    // this should be abstracted to a service
    $scope.$emit('AnalyticsTrack', event);
  };
}];
