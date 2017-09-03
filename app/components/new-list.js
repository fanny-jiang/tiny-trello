import Ember from 'ember';

export default Ember.Component.extend({
  lists: {},
  showInput: false,
  init() {
    this._super.apply(this, arguments);
  },
  didInsertElement() {
    this._super.apply(this, arguments);
  },
  actions: {
    addList(listName) {
      let listNamePath = 'lists.' + listName.toString();
      this.set(listNamePath, {items: [], description: null});
      this.set('listName', '');
    },
    newItemInput() {
      this.set('showInput', true);
    },
    addListItem(listItem, listName) {
      console.log('listname: ', listName, 'listItem: ', listItem)
      let listNameItemsPath = `lists.${listName}.items`
      let updatedItemsArr = this.get(listNameItemsPath);
      updatedItemsArr.push(listItem);
      this.set(listNameItemsPath, updatedItemsArr);
    }
  }
});
