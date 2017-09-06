import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    // triggers delete item action in main app
    deleteItem() {
      this.get('onSubmit')();
    },
    // triggers close modal action in main app
    closeModal() {
      this.get('onClick')();
    }
  }
});
