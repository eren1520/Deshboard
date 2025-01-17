import './App.css';

import FromElemoen from './Toan/FromElemoen';
import Tables from './Toan/Tables';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserCardPage from './Page/UserCardPage';
import MailboxPage from './Page/MailboxPage';
import Blanh from './Blanh/Blanh';
import FromElemoenPage from './Page/FromElemoenPage';
import TablePage from './Page/TablePage';


function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route path="/Card" element={<UserCardPage />} />
          <Route path="/mailbox" element={<MailboxPage />} />
          <Route path="/FromElemoen" element={<FromElemoenPage />} />
          <Route path="/Table" element={<TablePage />} />
        </Routes>
      </Router>
      {/* <Blanh/> */}



    </div>
  );
}

export default App;
