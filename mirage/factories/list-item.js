import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return i;
  },
  description(i) {
    return i;
  }
});
