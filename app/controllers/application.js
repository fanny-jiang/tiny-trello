import Ember from 'ember';

export default Ember.Controller.extend({
  defaultItems: [{
    name: 'Learn Ember.js',
    description: 'Complete emberschool tutorial'
  }, {
    name: 'Practice algorithms',
    description: 'Review binary search trees'
  }],
  actions: {
    openModal(item) {
      this.set('displayModal', true);
      this.set('selectedItem', item)
      console.log('item from application open modal: ', item)
      console.log('selecteditem:', this.selectedItem)
    },
    closeModal() {
      this.set('displayModal', false);
    },
    deleteItem() {
      this.set('displayModal', false);
      this.set('itemToDelete', this.selectedItem);
      console.log('DELETE BUTTON reached application', this.itemToDelete)
    }
  }
});
