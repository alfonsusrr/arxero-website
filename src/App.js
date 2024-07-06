import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link,
  useRouterMatch,
  useParams
} from "react-router-dom"

import Home from './pages/Home';
import About from './pages/About';
import Lumin from './pages/Lumin';

import './App.css';

function App() {
  return (
    <Router>
        <Route path="/">
          <Home/>
        </Route>
        <Route path="/lumin">
          <Lumin/>
        </Route>
    </Router>
  );
}

export default App;
