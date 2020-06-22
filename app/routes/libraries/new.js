import Route from '@ember/routing/route';
import { action } from  '@ember/object'

export default class LibrariesNewRoute extends Route {
    model() {
        return this.store.createRecord('library');
    }

    setupController(controller, model){
        this._super(controller, model);

        controller.set('title', 'Create a new libraray');
        controller.set('buttonLabel', 'Create');

    }

    renderTemplate() {
        this.render('libraries/form');
    }

    @action 
    saveLibrary(newLibrary) {
            newLibrary.save().then(() => this.transitionTo('libraries'));
    }

    @action 
    willTransition() {
        let model = this.controller.get('model');
  
        if (model.get('isNew')) {
          model.destroyRecord();
        }
      }
}
