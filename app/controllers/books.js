import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class BooksController extends Controller {
  @tracked authors = this.model.authors;
  @tracked books = this.model.books;
  @tracked libraries = this.model.libraries;
}