import './App.css'
import {AdminPage} from './Components/AdminPage'
import {LoginForm} from './Components/LoginForm'
import {VotingPage} from './Components/VotingPage'
import { Users } from './user';
import { useState,useEffect } from 'react';
function App() {
  const [userType, setUserType] = useState(null);
  useEffect(() => {
    const storedUserType = localStorage.getItem('userType');
    if (storedUserType) {
      setUserType(storedUserType);
    }
  }, []);
  const handleLogin = (type) => {
    setUserType(type);
  };
  const handleLogout = () => {
    localStorage.removeItem('userType');
    setUserType('');
  };

  return (
    <div className="App">
      {userType === 'admin' && <AdminPage onLogout={handleLogout} />}
      {userType === 'user' && <VotingPage onLogout={handleLogout} />}
      {!userType && <LoginForm users={Users} onLogin={handleLogin} />}
    </div>
  )
}

export default App