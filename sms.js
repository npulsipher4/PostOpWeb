require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_NUMBER_POSTOP;
const recipientNumber = document.getElementById('recipientPhoneNumber');
const client = require('twilio')(accountSid, authToken);

const triggerForm  = document.getElementById('triggerForm');

triggerForm.addEventListener('submit', executeFlow);

function executeFlow() {
    client.studio.v2.flows('FW5ed3a14fd7b0b1a39c7de8a2cabfcc38')
    .executions
    .create({
        to: recipientNumber,
        from: twilioNumber,
        parameters: null})
    .then(execution => console.log('Execution created with SID:', execution.sid))
    .then(message => console.log(message.sid))
    .catch(error => console.error('Error creating execution:', error));
    alert('The form was submitted');
}