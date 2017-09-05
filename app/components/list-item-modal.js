import Ember from 'ember';

export default Ember.Component.extend({
  // isShowingModal: true,
  actions: {
    editDescription() {

    },
    deleteItem () {

    },
    closeModal() {
      this.set('isShowingModal', false)
      // this.set(itemName, false)
    }
  }
});
