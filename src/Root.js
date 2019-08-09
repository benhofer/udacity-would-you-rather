import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppContainer from "./containers/AppContainer";
import Login from "./components/Login";
import NoMatch from "./components/404Page";

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/app" component={AppContainer} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default Root;
