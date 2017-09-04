import Ember from 'ember';

export default Ember.Component.extend({
  listItems: null,
  showInput: false,

  init() {
    this._super.apply(this, arguments);
    this.set('listItems', Ember.A());
  },
  actions: {
    newListitemInput() {
      this.toggleProperty('showInput');
    },
    addListItem(listItem) {
      this.listItems.pushObject(listItem);
      this.set('listItem', '');
      this.toggleProperty('showInput');
      console.log('list items: ', this.listItems);
    }
  }
});
