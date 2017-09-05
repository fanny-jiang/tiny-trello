import Ember from 'ember';

export default Ember.Component.extend({
  // isShowingModal: true,
  actions: {
    deleteItem () {
      console.log('delete action from list-item-modal')
      this.set('isShowingModal', false);
      this.get('onSubmit')();
    },
    closeModal() {
      this.set('isShowingModal', false);
    }
  }
});
