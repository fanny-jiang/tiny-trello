import Ember from 'ember';

export default Ember.Component.extend({
  lists: {},
  showInput: false,
  newItem: false,
  init() {
    this._super.apply(this, arguments);
  },
  actions: {
    newItemInput() {
      this.toggleProperty('showInput');
    },
    addList(listName) {
      let listNamePath = `lists.${listName}`;
      this.set(listNamePath, {items: Ember.A(), description: null});
      this.set('listName', '');
    }
  }
});
