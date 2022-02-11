import './InboxLabel.css';

const InboxLabel = ({ createLabel, addLabel }) => {
  return (
    <>
      <div>
        <button onClick={() => createLabel()}>Create Inbox Label</button>
      </div>
      <div>
        <button onClick={() => addLabel()}>Add Label to Email</button>
      </div>
    </>
  );
};

export default InboxLabel;
