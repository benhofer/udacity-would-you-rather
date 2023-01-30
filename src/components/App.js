import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";
import LeaderboardContainer from "../containers/LeaderboardContainer";
import QuestionContainer from "../containers/QuestionContainer";
import Header from "./Header";
import NoMatch from "./404Page";

class App extends Component {
  render() {
    if (this.props && this.props.authedUser) {
      return (
        <div>
          <Header match={this.props.match} authedUser={this.props.authedUser} />
          <Switch>
            <Route
              path={`${this.props.match.path}`}
              exact
              component={HomeContainer}
            />
            <Route
              path={`${this.props.match.path}/questions/:question_id`}
              exact
              component={QuestionContainer}
            />
            <Route
              path={`${this.props.match.path}/leaderboard`}
              component={LeaderboardContainer}
            />
            <Route component={NoMatch} />
          </Switch>
        </div>
      );
    } else {
      // Simulate an HTTP redirect:
      window.location.replace("/");
    }
  }
}

export default App;
