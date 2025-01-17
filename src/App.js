import './App.css';

import FromElemoen from './Toan/FromElemoen';
import Tables from './Toan/Tables';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserCardPage from './Page/UserCardPage';


function App() {
  return (
    <div>

       <Router>
      <Routes>
      <Route path="/Card" element={<UserCardPage />} />
      </Routes>
    </Router>
     

    </div>
  );
}

export default App;
