import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'
import Login from './components/login'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
