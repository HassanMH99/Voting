import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {AdminPage} from './Components/AdminPage'
import {LoginForm} from './Components/LoginForm'
import {UserPage} from './Components/UserPage'
// import VotingPage from './Components/VotingPage'
function App() {

  return (
    <Router>
      <Switch>
      <Route exact path="/" component={LoginForm} />
      <Route path="/admin" component={AdminPage} />
      <Route path="/user" component={UserPage} />
      </Switch>
  </Router>
  )
}

export default App
