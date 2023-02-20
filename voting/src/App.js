import './App.css'
import {AdminPage} from './Components/AdminPage'
import {LoginForm} from './Components/LoginForm'
import {VotingPage} from './Components/VotingPage'
import { Users } from './user';
import { useState,useEffect } from 'react';
function App() {
  const parties=[
    {id:1,name:"cats"},
    {id:2,name:"dogs"},
    {id:3,name:"cows"},
    {id:4,name:"lions"},
  ]
  const [userType, setUserType] = useState(null);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = (type) => {
    setUserType(type);
    setLoggedIn(true);
  };
  const handleLogout = () => {
    localStorage.removeItem('userType');
    setUserType('');
    setLoggedIn(false);
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