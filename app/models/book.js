import Model, { attr, belongsTo } from '@ember-data/model';
import faker from 'faker';

export default Model.extend({
  title : attr('string'),
  releaseYear: attr('date'),
  library: belongsTo('library', { inverse: 'books', async: true }),
  author: belongsTo('author', { inverse: 'books', async: true }),

  randomize(author, library) {

    this.title = this._bookTitle();
    this.author = author;
    this.releaseYear = this._randomYear();
    this.library = library;

    return this;
  },

  _bookTitle() {
    return `${faker.commerce.productName()} Cookbook`;
  },

  _randomYear() {
    return new Date(this._getRandomArbitrary(1900, 2015).toPrecision(4));
  },

  _getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

});
  
