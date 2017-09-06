import Ember from 'ember';

export default Ember.Component.extend({
  // isShowingModal: true,
  actions: {
    deleteItem () {

    },
    closeModal() {
      // this.set('displayModal', false);
      this.get('onClick')();
    }
  }
});
