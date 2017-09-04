import Ember from 'ember';

export default Ember.Controller.extend({
  defaultList: [{
    name: 'Learn Ember.js',
    description: 'Complete emberschool tutorial'
  }, {
    name: 'Practice algorithms',
    description: 'Review binary search trees'
  }],
  isShowingModal: false,
  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    }
  }
});
