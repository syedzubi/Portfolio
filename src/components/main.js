import React from "react";
import LandingPage from "./landing";
import aboutme from "./aboutme";
import contact from "./contact";
import projects from "./projects";
import resume from "./resume";
import { Switch, Route } from "react-router-dom";
const Main = () => (
  <Switch>
    <Route exact path='/' component={LandingPage} />
    <Route exact path='/aboutme' component={aboutme} />
    <Route exact path='/projects' component={projects} />
    <Route exact path='/contact' component={contact} />
    <Route exact path='/resume' component={resume} />
  </Switch>
);

export default Main;
