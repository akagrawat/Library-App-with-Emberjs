import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class AdminSeederRoute extends Route {
    model() {
        return hash({
            libraries: this.store.findAll('library'),
            books: this.store.findAll('book'),
            authors: this.store.findAll('author')
        })
    }
    setupController(controller, model) {
    controller.set('libraries', model.libraries);
    controller.set('books', model.book);
    controller.set('authors', model.authors);
    }
}
