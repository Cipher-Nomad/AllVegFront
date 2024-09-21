import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import SignIn from './components/SignIn-Up/SignIn'
import SignUp from './components/SignIn-Up/SignUp'
import Dashboard from './components/Dashboard/Dashboard';

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>
    </Router>)
}

export default App
