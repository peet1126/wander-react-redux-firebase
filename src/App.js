import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";
import AboutApp from "./components/pages/AboutApp";
import Portfolio from "./components/pages/Portfolio";
import ScrollToTop from "./components/utils/ScrollToTop";
import CryptoApp from "./CryptoApp";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop />
        <div className="app">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateProject} />
            <Route path="/about" component={AboutApp} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/crypto-calculator" component={CryptoApp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
