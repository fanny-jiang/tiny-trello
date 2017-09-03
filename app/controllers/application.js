import Ember from 'ember';

export default Ember.Controller.extend({
  defaultList: [{
    name: 'Learn Ember.js',
    description: 'Complete emberschool tutorial'
  }, {
    name: 'Practice algorithms',
    description: 'Review binary search trees'
  }],
  newLists: [],
  newList: false,
  listCount: 0,
  actions: {
    addNewList() {
      // let newCount = this.listCount + 1
      // this.set('listCount', newCount);
      this.set('newList', true)
    },
    addList(listName) {
      this.lists.push({name: listName, description: null})
      console.log('this.lists', this.lists)
    }
  }
});
