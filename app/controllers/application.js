import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    openModal(item) {
      this.set('displayModal', true);
      this.set('selectedItem', item)
      console.log('item from application open modal: ', item)
    },
    closeModal() {
      this.set('displayModal', false);
    }
  }
});
