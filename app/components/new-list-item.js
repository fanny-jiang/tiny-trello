import Ember from 'ember';

export default Ember.Component.extend({
  listItems: null,
  showInput: false,

  init() {
    this._super.apply(this, arguments);
    this.set('listItems', Ember.A());
  },
  isShowingModal: false,
  actions: {
    newListitemInput() {
      this.toggleProperty('showInput');
    },
    addListItem(listItem) {
      this.listItems.pushObject({name: listItem, description: ''});
      this.set('listItem', '');
      this.toggleProperty('showInput');
      console.log('list items: ', this.listItems);
    },
    deleteListItem(listItem) {
      let filtered = this.listItems.filter((item) => {
        return item.name === listItem
      })
      console.log('Filtered', filtered);
      this.set('listItems',filtered);
      console.log('listitems: ', this.listItems)
    },
    toggleModal() {
      this.toggleProperty('isShowingModal');
    }
  }
});
