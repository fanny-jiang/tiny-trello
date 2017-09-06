import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteItem () {
      this.get('onSubmit')();
    },
    closeModal() {
      this.get('onClick')();
    }
  }
});
