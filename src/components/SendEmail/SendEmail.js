import './SendEmail.css';

const SendEmail = (email) => {
  return (
    <div>
      <button onClick={() => email()}>Send Email</button>
    </div>
  );
};

export default SendEmail;
