const Nylas = require('nylas');
Nylas.config({
  clientId: '4a218fyk2t8bm2xof4j09hl0m',
  clientSecret: '4x8ohk8tz36gwn0s9xby2n616',
});
const nylas = Nylas.with('8CjGSTSqmS83o50HeZeevLvEoBnPTo');
const labelName = 'nylas_challenge';
let labelToUpdate;

nylas.account.get().then((account) => {
  if (account.organizationUnit === 'label') {
    nylas.labels.forEach({}, checkLabel, createAndApplyLabel);
  }
});

function checkLabel(label) {
  if (label.displayName === labelName) {
    labelToUpdate = label;
  }
}

function createAndApplyLabel() {
  if (!labelToUpdate) {
    console.log(`Creating New Label: ${labelName}`);
    labelToUpdate = nylas.labels.build({ displayName: labelName });
    labelToUpdate.save().then((label) => {
      addLabelToMostRecentMessage(label);
    });
  } else {
    console.log(`${labelName} already exists!`);
    addLabelToMostRecentMessage(labelToUpdate);
  }
}

function addLabelToMostRecentMessage(label) {
  nylas.messages.first().then((msg) => {
    console.log(`${label.displayName} applied to the most recent email.`);
    msg.labels.push(label);
    msg.save().then((savedMsg) => {
      console.log(`Subject: ${savedMsg.subject}`);
      console.log('This email contains the following labels');
      console.log(savedMsg.labels);
    });
  });
}
