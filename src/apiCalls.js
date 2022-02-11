export const sendEmail = () => {
  return fetch('https://api.nylas.com/send', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer AkaouqbUPwUPGvSVQz2lHxXL5a9Z4a',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      body: 'Sounds great! See you then.',
      subject: 'Re: Meeting',
      to: [
        {
          email: 'nylassechallenge@gmail.com',
        },
      ],
    }),
  }).then(console.log('email sent!'));
};

export const createLabel = () => {
  return fetch('https://api.nylas.com/labels', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer AkaouqbUPwUPGvSVQz2lHxXL5a9Z4a',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      display_name: 'nylas_challenge',
    }),
  }).then(console.log('label created!'));
};

export const addLabel = () => {
  return fetch('https://api.nylas.com/messages/cjhbdrq3xl6xz9ombpfnb8y8i', {
    method: 'PUT',
    headers: {
      Authorization: 'Bearer AkaouqbUPwUPGvSVQz2lHxXL5a9Z4a',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      label_ids: ['nylas_challenge'],
    }),
  }).then(console.log('label added to email!'));
};
