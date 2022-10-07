import './App.css';
import { useState } from 'react';
import Login from './components/Login/Login';
import Main from './components/Main/Main';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Alert from './components/Alert/Alert';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type, prefix) => {
    setAlert({
      msg: msg,
      type: type,
      prefix: prefix
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  
  return (
    <Router>
      <div className="App">
        
        <Alert alert={alert} />

        <Routes>
          <Route path='/' element={<Login showAlert={showAlert} />} />
          <Route path='/login' element={<Login showAlert={showAlert} />} />
          <Route path='/clients/*' element={<Main />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;