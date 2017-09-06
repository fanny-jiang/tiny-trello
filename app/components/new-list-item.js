import Ember from 'ember';

export default Ember.Component.extend({
  // listItems: null,
  showInput: false,

  init() {
    this._super.apply(this, arguments);
    this.set('listItems', Ember.A());
  },
  didReceiveAttrs() {
    this._super.apply(this, arguments);
    if (this.itemToDelete) {
      console.log('this', this.itemToDelete);
      let deleteThis = document.getElementById(this.itemToDelete.name);
      document.getElementById(this.itemToDelete.name).remove()
    }
  },
  actions: {
    newListitemInput() {
      this.toggleProperty('showInput');
    },
    addListItem(listItem) {
      this.listItems.pushObject({name: listItem, description: ''});
      this.set('listItem', '');
      this.toggleProperty('showInput');
      console.log('listItems after adding', this.listItems)
    },
    deleteListItem(listItem) {
      console.log('listItem to delete', listItem)
      let filtered = this.listItems.filter((item) => {
        return item.name !== listItem
      })
      this.set('listItems', filtered);
    },
    showDescription(listItem) {
      console.log('list item from new-list-item showDescription', listItem)
      this.get('onClick')(listItem)
    }
  }
});
