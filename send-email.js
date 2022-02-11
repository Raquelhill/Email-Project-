const Nylas = require('nylas');

Nylas.config({
  clientId: '4a218fyk2t8bm2xof4j09hl0m',
  clientSecret: '4x8ohk8tz36gwn0s9xby2n616',
});

const nylas = Nylas.with('8CjGSTSqmS83o50HeZeevLvEoBnPTo');

const draft = nylas.drafts.build({
  subject: 'With Love, from Nylas',
  to: [{ name: 'My Nylas Friend', email: 'swag@nylas.com' }],
  body: 'This email was sent using the Nylas email API. Visit https://nylas.com for details.',
});

draft.send().then((message) => {
  console.log(`${message.id} was sent`);
});
