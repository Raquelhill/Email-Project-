import './SendEmail.css';

const SendEmail = ({ sendEmail }) => {
  return (
    <div>
      <button onClick={() => sendEmail()}>Send Email</button>
    </div>
  );
};

export default SendEmail;
