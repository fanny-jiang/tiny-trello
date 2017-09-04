import Ember from 'ember';

export default Ember.Component.extend({
  defaultList: [{
    name: 'Learn Ember.js',
    description: 'Complete emberschool tutorial'
  }, {
    name: 'Practice algorithms',
    description: 'Review binary search trees'
  }],
  isShowingModal: false,
  actions: {
    deleteListItem(listItem) {
      let filtered = this.defaultList.filter((item) => {
        return item.name === listItem
      })
      console.log('Filtered', filtered);
      this.set('defaultList',filtered);
      console.log('listitems: ', this.defaultList)
    },
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    }
  }
});
