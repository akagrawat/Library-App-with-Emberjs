import Route from '@ember/routing/route';
import { action } from  '@ember/object'

export default class LibrariesNewRoute extends Route {
    model() {
        return this.store.createRecord('library');
    }
    @action 
    saveLibrary(newLibrary) {
            newLibrary.save().then(() => this.transitionTo('libraries'));
    }

    @action 
    willTransition() {
        // rollbackAttributes() removes the record from the store
        // if the model 'isNew'

        // let model = this.controller.get('model');
        // if (model.get('isNew')) {
        //     model.destroyRecord();
        //   }
        this.controller.get('model').rollbackAttributes();
      }
}
