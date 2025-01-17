import './App.css';
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
