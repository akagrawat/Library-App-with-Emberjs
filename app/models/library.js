import Model, { attr, hasMany } from '@ember-data/model';
import { notEmpty } from '@ember/object/computed';
import faker from 'faker';

export default Model.extend({

  name: attr('string'),
  address: attr('string'),
  phone: attr('string'),

  books: hasMany('book'),

  isValid: notEmpty('name'),

  randomize() {
    this.set('name', faker.company.companyName() + ' Library');
    this.set('address', this._fullAddress());
    this.set('phone', faker.phone.phoneNumber());

    // If you would like to use in chain.
    return this;
  },

  _fullAddress() {
    return `${faker.address.streetAddress()}, ${faker.address.city()}`;
  }
});