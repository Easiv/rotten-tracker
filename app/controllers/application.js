import Ember from 'ember';

export default Ember.Controller.extend({
  lol: 'color',
  newItem: '',
  chef: 'Chef',
  deeshes: 'dishes',
  menuLength: Ember.computed.alias('model.length'),
  availableItems: Ember.computed.filterBy('model', 'available', true),
  actions: {
    enter(dish) {
      Ember.set(dish, 'available', false);
      dish.save()
    },
    exit(dish) {
      Ember.set(dish, 'available', true);
      dish.save()
    },
    saveNewItem() {
      this.store.createRecord('dish', {
        available: false,
        name: this.get('newItem')
      }).save()
      this.set('newItem', '')
    },
    destroyItem(dish) {
      dish.destroyRecord();
    }
  }
});
