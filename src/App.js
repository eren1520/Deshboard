import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserCardPage from './Page/UserCardPage';
import MailboxPage from './Page/MailboxPage';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Card" element={<UserCardPage />} />
          <Route path="/mailbox" element={<MailboxPage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
