import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppContainer from "./containers/AppContainer";
import LoginContainer from "./containers/LoginContainer";
import NoMatch from "./components/404Page";
import LoadingBar from "react-redux-loading";

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <LoadingBar style={{ backgroundColor: "#007bff", height: "5px" }} />
          <Switch>
            <Route path='/' exact component={LoginContainer} />
            <Route path='/app' component={AppContainer} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default Root;
