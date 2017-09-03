import Ember from 'ember';

export default Ember.Component.extend({
  lists: null,
  init() {
    this._super.apply(this, arguments);
    this.set('lists', Ember.A());
  },
  didInsertElement() {
    this._super.apply(this, arguments);
  },
  actions: {
    addList(listName) {
      this.lists.addObject({name: listName, description: null});
    }
  }
});
