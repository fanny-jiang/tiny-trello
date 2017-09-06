import Ember from 'ember';

export default Ember.Component.extend({
  listItems: null,
  showInput: false,

  init() {
    this._super.apply(this, arguments);
    this.set('listItems', Ember.A());
    this.listItems.pushObjects([{
      name: 'Learn Ember.js',
      description: 'Complete emberschool tutorial'
    }, {
      name: 'Practice algorithms',
      description: 'Review binary search trees'
    }]);
  },
  isShowingModal: false,
  actions: {
    newListitemInput() {
      this.toggleProperty('showInput');
    },
    addListItem(listItem) {
      this.listItems.pushObject({name: listItem, description: ''});
      this.set('listItem', '');
      this.toggleProperty('showInput');
    },
    deleteListItem(listItem) {
      let filtered = this.listItems.filter((item) => {
        return item.name !== listItem
      })
      this.set('listItems',filtered);
    },
    showDescription(listItem) {
      // this.set('displayModal', true);
      console.log('list item from new-list-item showDescription', listItem)
      this.get('onClick')(listItem)
    }
  }
});
