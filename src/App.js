import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Container from "./Container";
import Familie from "./Familie";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/groepen">Groepen</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/groepen">
            <Groepen />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Groepen() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Groepen</h2>

      <ul>
        <li>
          <Link to={`${match.url}/container`}>Container</Link>
        </li>
        <li>
          <Link to={`${match.url}/familie`}>Familie</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/container`}>
          <Container />
        </Route>
        <Route path={`${match.path}/familie`}>
          <Familie />
        </Route>
        <Route path={match.path}>
          <h3>Please select a group.</h3>
        </Route>
      </Switch>
    </div>
  );
}
