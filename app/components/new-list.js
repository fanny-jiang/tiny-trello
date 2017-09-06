import Ember from 'ember';

export default Ember.Component.extend({
  lists: {},
  showInput: false, // controls visibility of new list input
  init() {
    this._super.apply(this, arguments);
  },
  actions: {
    newListInput() {
      this.toggleProperty('showInput');
    },
    addList(listName) {
      let listNamePath = `lists.${listName}`;
      this.set(listNamePath, {items: Ember.A()}); // adds empty list to lists obj
      this.set('listName', '');
      this.toggleProperty('showInput');
    },
    // triggers action in main app to open modal and show description for selected list item
    showDescription(listItem) {
      this.get('onClick')(listItem);
    },
  }
});
