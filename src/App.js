import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import Home from "views/Home/Home.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";

var hist = createBrowserHistory();

function App() {
  React.useEffect(() => {
    window.addEventListener("mousemove", (e) => {
        document.querySelector(".cursor").style.top = e.pageY + "px";
        document.querySelector(".cursor").style.left = e.pageX + "px";
    });
  });

  return (
    <React.Fragment>
      <span className="cursor"></span>
      <Router history={hist}>
        <Switch>
          <Route path="/landing-page" component={LandingPage} />
          <Route path="/profile-page" component={ProfilePage} />
          <Route path="/login-page" component={LoginPage} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
export default App;
