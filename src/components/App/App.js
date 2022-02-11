import './App.css';
import SendEmail from '../SendEmail/SendEmail';
import InboxLabel from '../InboxLabel/InboxLabel';

const App = () => {
  return (
    <div className="App">
      <SendEmail />
      <InboxLabel />
    </div>
  );
};
export default App;
