/**
 * social.controller.js
 * @type controller
 *
 */

module.exports = ['$scope', '$log', function($scope, $log) {

  this.social = this.config.social;
  this.incremented = this.config.incremented;

  this.handleSocialClick = function ($event, $id, feature) {
    console.log($event);
    if (this.incremented[feature]) {
      this.social[feature]--;
      this.incremented[feature] = false;
      this.updateOmniture({
        id: $id,
        feature: feature,
        action: 'decrement'
      });
      return;
    }
    this.incremented[feature] = true;
    this.social[feature]++;
    this.updateOmniture({
      id: $id,
      feature: feature,
      action: 'increment'
    });
  }

  this.updateOmniture = function (event) {
    // this should be abstracted to a service
    $log.log(event);
  }

}];
