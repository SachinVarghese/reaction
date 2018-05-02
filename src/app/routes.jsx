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
import Next from "./next";

const mainRouterTransition = ({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames="fade" timeout={1500}>
      <Switch location={location}>
        <Route exact path="/" component={Home} />
        <Route exact path="/next" component={Next} />
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
