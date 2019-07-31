import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./components/App";
import Login from "./components/Login";

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route path="/" exact component={Login} />
          <Route path="/app" component={App} />
        </div>
      </Router>
    </Provider>
  );
}

export default Root;
