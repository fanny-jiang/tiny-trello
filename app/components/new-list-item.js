import Ember from 'ember';

export default Ember.Component.extend({
  listItems: null, // keeps track of list items to render for each list
  displayInput: false, // controls visibility of input box for new list item

  init() {
    this._super.apply(this, arguments);
    this.set('listItems', Ember.A()); // initialize listItems to empty array
  },
  didReceiveAttrs() {
    // when component receives "itemToDelete" attribute from main app, remove element from DOM (jQuery)
    this._super.apply(this, arguments);
    if (this.itemToDelete) {
      document.getElementById(this.itemToDelete.name).remove();
    }
  },
  actions: {
    // toggles visibility of input textbox
    newListItemInput() {
      this.toggleProperty('displayInput');
    },
    addListItem(listItem) {
      this.listItems.pushObject({name: listItem, description: ''});
      this.set('listItem', '');
      this.toggleProperty('displayInput');
    },
    // triggers action to notify main app to show description/open modal dialog
    // also passes the selected list item up to the main app
    showDescription(listItem) {
      this.get('onClick')(listItem);
    }
  }
});
