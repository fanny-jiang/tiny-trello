import Ember from 'ember';

export default Ember.Component.extend({
  lists: {},
  showInput: false,
  init() {
    this._super.apply(this, arguments);
  },
  actions: {
    newListInput() {
      this.toggleProperty('showInput');
    },
    addList(listName) {
      let listNamePath = `lists.${listName}`;
      this.set(listNamePath, {items: Ember.A(), description: null});
      this.set('listName', '');
      this.toggleProperty('showInput');
    },
    showDescription(lists) {
      console.log('whats passed into new-list showDescription', lists)
      this.get('onClick')(lists);
    },
  }
});
