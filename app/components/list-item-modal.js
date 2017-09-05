import Ember from 'ember';

export default Ember.Component.extend({
  // isShowingModal: true,
  actions: {
    deleteItem () {
      this.set('isShowingModal', false);
      this.get('onSubmit')();
    },
    closeModal() {
      this.set('isShowingModal', false);
    }
  }
});
