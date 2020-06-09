import Controller from '@ember/controller';
import { match, not, gte, and } from '@ember/object/computed';

export default Controller.extend ({
    email : '',
    message : '',
    isSuccess: false,
    successMessage: '',

    isValid : match('email',  /^.+@.+\..+$/),
    isLongEnough : gte('message.length', 5),
    isBothTrue : and('isValid', 'isLongEnough'),

    isDisabled : not('isBothTrue'),
     

    actions: {
        sendMessage: function(){
            const newMessage = this.store.createRecord('contact', {email: this.email, message: this.message});
                newMessage.save().then(() => {
                    this.set('isSuccess', true);
                    this.set('successMessage', 'We got your message and we’ll get in touch soon');
                    this.set('email','');
                    this.set('message', '');     
                });
                alert(`Sending your message in progress...`);
                
            }
    }
        })
