import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({

    emailAddress: '',
    responseMessage: '',
    headerMessage: 'Coming Soon',

    isValid: match('emailAddress',  /^.+@.+\..+$/),
    isDisabled: not('isValid'),

    actions: {
        saveInvitation() {
            alert(`Saving of the following email address is in progress: ${this.emailAddress}`);
            this.set('responseMessage', `Thank you! We've just saved your email address: ${this.emailAddress}`);
            this.set('emailAddress', '');

        }
    }

  
  });