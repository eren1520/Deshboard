import './App.css';

import FromElemoen from './Toan/FromElemoen';
import Tables from './Toan/Tables';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserCardPage from './Page/UserCardPage';
import MailboxPage from './Page/MailboxPage';
import Blanh from './Blanh/Blanh';
import FromElemoenPage from './Page/FromElemoenPage';
import TablePage from './Page/TablePage';
import GroupchatsPage from './Page/GroupchatsPage';
import CalenderPage from './Page/CalenderPage';
import e500Page from './Page/NamTramPage';
import BonPage from './Page/BonPage';
import LockSreenPage from './Page/LockSreenPage';
import LoginPage from './Page/LoginPage';
import MaintaimencePage from './Page/MaintaimencePage';
import DashboardPage from './Page/DashboardPage';
import RecoverPage from './Page/RecoverPage';
import RegisterPage from './Page/RegisterPage';
import NamTramPage from './Page/NamTramPage';


function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route path="/Card" element={<UserCardPage />} />
          <Route path="/mailbox" element={<MailboxPage />} />
          <Route path="/FromElemoen" element={<FromElemoenPage />} />
          <Route path="/Table" element={<TablePage />} />
          <Route path="/Groupchat" element={<GroupchatsPage />} />
          <Route path="/Calender" element={<CalenderPage />} />
          <Route path="/404" element={<BonPage />} />
          <Route path="/500" element={<NamTramPage />} />
          <Route path="/LockSreen" element={<LockSreenPage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Maintainence" element={<MaintaimencePage />} />
          <Route path="/Recover" element={<RecoverPage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/blanh" element={<Blanh />} />
          <Route path="/" element={<DashboardPage />} />
          
        </Routes>
      </Router>
      {/* <Blanh/> */}



    </div>
  );
}

export default App;
