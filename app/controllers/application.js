import Ember from 'ember';

export default Ember.Controller.extend({
  defaultList: [{
    name: 'Learn Ember.js',
    description: 'Complete emberschool tutorial'
  }, {
    name: 'Practice algorithms',
    description: 'Review binary search trees'
  }],
  showInput: false,
  listCount: 0,
  actions: {
    newListInput() {
      this.toggleProperty('showInput');
    }
  }
});
