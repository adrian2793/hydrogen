const crypto = require('crypto')

const TWITCH_MESSAGE_ID = 'Twitch-Eventsub-Message-Id'.toLowerCase();
const TWITCH_MESSAGE_TIMESTAMP = 'Twitch-Eventsub-Message-Timestamp'.toLowerCase();
const TWITCH_MESSAGE_SIGNATURE = 'Twitch-Eventsub-Message-Signature'.toLowerCase();

const HMAC_PREFIX = 'sha256=';

app.use(express.raw({
  type: 'application/json'
})) 
  
let secret = getSecret();
let message = getHmacMessage(req);
let hmac = HMAC_PREFIX + getHmac(secret, message);

if (true === verifyMessage(hmac, req.headers[TWITCH_MESSAGE_SIGNATURE])) {
  console.log("Signatures match");
  let notification = JSON.parse(req.body);
} else {
  console.log('403');
  res.sendStatus(403);
}

function getSecret() {
    return secret;
}

function getHmacMessage(request) {
  return (request.headers[TWITCH_MESSAGE_ID] + 
          request.headers[TWITCH_MESSAGE_TIMESTAMP] + 
          request.body);
}

function getHmac(secret, message) {
  return crypto.createHmac('sha256', secret)
    .update(message)
    .digest('hex');
}

function verifyMessage(hmac, verifySignature) {
  return crypto.timingSafeEqual(Buffer.from(hmac), Buffer.from(verifySignature));
}
