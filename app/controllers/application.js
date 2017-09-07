import Ember from 'ember';

export default Ember.Controller.extend({
  displayModal: null,
  selectedItem: null,
  itemToDelete: null,
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
      this.set('selectedItem', item);
    },
    closeModal() {
      this.set('displayModal', false);
    },
    deleteItem() {
      this.set('displayModal', false);
      this.set('itemToDelete', this.selectedItem);
    },
    deleteList(listName) {
      document.getElementById(listName).remove();
    }
  }
});
