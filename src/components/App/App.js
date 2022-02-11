import './App.css';
import SendEmail from '../SendEmail/SendEmail';
import InboxLabel from '../InboxLabel/InboxLabel';
import { sendEmail, createLabel, addLabel } from '../../apiCalls';

const App = () => {
  return (
    <div className="App">
      <SendEmail sendEmail={sendEmail} />
      <InboxLabel createLabel={createLabel} addLabel={addLabel} />
    </div>
  );
};
export default App;
