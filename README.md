Simple app with a RESTful API and test client that uses Twilio to call a given (registered) phone number and say 'hello'

To build/deploy

git clone
cd client
npm install
npm run build

cd ../api
npm install
npm run build

pm2 start node -- -r module-alias/register ./dist --env=development

demo http://52.215.206.112/

NB: nginx config uses reverse proxy for express app.