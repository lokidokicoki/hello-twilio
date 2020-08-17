require('dotenv').config({ path: './twilio.env' });

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const fromNumber = '+12056497881';

export async function callNumber(telno: string): Promise<string> {
    // const call = await client.calls.create({
    //     twiml: '<Response><Say>Hello</Say></Response>',
    //     to: telno,//'+447740984037',
    //     from: fromNumber
    // });

    const call = {
        sid: Math.random().toString()
    }
//throw new Error(`pistonbroke`)
    //      .then((call:any) => console.log(call.sid));
    return call.sid;
}