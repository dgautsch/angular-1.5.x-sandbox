/**
 * social.controller.js
 * @type controller
 *
 */

module.exports = function() {

  this.social = {
    bookmarks: 1002,
    favorites: 131,
    comments: 21
  }

  this.incremented = {
    bookmarks: false,
    favorites: false
  }

  this.handleSocialClick = function(feature) {
    if (this.incremented[feature]) {
      this.social[feature]--;
      this.incremented[feature] = false;
      return;
    }
    this.incremented[feature] = true;
    this.social[feature]++;
  }

  this.updateOmniture = function(action) {
    // logic here
    console.log(action);
  }

};
