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
            const newInvitation = this.store.createRecord('invitation', {email: this.emailAddress});
            newInvitation.save().then((response) => {

                this.set('responseMessage', `Thank you! We've just saved your email address: ${response.get('id')}`);
                this.set('emailAddress', '');

            });
        }
    }

  
  });