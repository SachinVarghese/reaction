import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import "../styles/main.scss";
import Icon from "../assets/me.jpeg";
import Home from "./home";
import Login from "./login";

const mainRouterTransition = ({ location }) => (
  <TransitionGroup className="full-size no-scroll">
    <CSSTransition key={location.key} classNames="fade" timeout={2000}>
      <Switch location={location}>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route render={() => <div>Not Found</div>} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
);

const mainRouter = () => (
  <Router>
    <Route render={mainRouterTransition} />
  </Router>
);

export default mainRouter;
