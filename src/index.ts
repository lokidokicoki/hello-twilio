// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC5cbf01e3deecb492472279f30fb9e893';
const authToken = '3d398c9be04d15f4350542e449553e23';
const client = require('twilio')(accountSid, authToken);

client.calls
      .create({
         url: 'http://demo.twilio.com/docs/voice.xml',
         to: '+447740984037',
         from: '+12056497881'
       })
      .then((call:any) => console.log(call.sid));
