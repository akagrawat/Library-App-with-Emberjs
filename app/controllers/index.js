import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({

    email: '',
    responseMessage: '',
    headerMessage: 'Coming Soon',

    isValid: match('email',  /^.+@.+\..+$/),
    isDisabled: not('isValid'),

    actions: {
      saveInvitation() {
        const newInvitation = this.store.createRecord('invitation', {email: this.email})
          newInvitation.save().then((response) => {

              this.set('responseMessage', `Thank you! We've just saved your email address: ${response.get('id')}`);
              this.set('email', '');

          });
      }
  }

  });