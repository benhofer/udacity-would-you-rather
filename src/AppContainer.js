import React from 'react';
import { Navbar, Nav, Collapse} from 'bootstrap-4-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "./components/App";
import Login from "./components/Login";
import { connect } from 'react-redux';

const AppContainer = (props) => {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Login} />
        <Route path="/app" exact component={App} />
      </div>
    </Router>
  );
}

export default AppContainer;
