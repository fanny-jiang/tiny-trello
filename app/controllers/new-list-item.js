import Ember from 'ember';

const { setProperties, set } = Ember;

export default Ember.Controller.extend({
  actions: {
    showModal(modalDialogName, modalContext) {
      const applicationController = this.controller;

      setProperties(applicationController, {
        modalDialogName,
        modalContext,
        isShowingModal: true
      });
    },
    closeModal() {
      const applicationController = this.controller;

      set(applicationController, 'isShowingModal', false);
    }
  }

});
