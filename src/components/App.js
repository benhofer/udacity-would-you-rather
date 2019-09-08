import React, { Component } from 'react';
import { Navbar, Nav } from 'bootstrap-4-react';
import { Switch, Route, Link } from "react-router-dom";
import HomeContainer from '../containers/HomeContainer';
import LeaderboardContainer from '../containers/LeaderboardContainer';
import QuestionContainer from '../containers/QuestionContainer';
import NoMatch from "./404Page";

class App extends Component {
  render() {
    if (this.props && this.props.authedUser) {
      return (
        <div>
          <Navbar expand="lg" light bg="light">
            <Navbar.Brand href="#">
              Would You Rather App
              </Navbar.Brand>
            <Navbar.Nav mr="auto">
              <Nav.Item>
                <Link
                  className={`${window.location.pathname === ('/app' || '/app/') ? 'active' : ''} nav-link`}
                  to={`${this.props.match.url}`}
                >Home</Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  className={`${window.location.pathname === ('/app/leaderboard/' || '/app/leaderboard') ? 'active' : ''} nav-link`}
                  to={`${this.props.match.url}/leaderboard/`}
                >Leaderboard</Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  className="nav-link"
                  to="/"
                >Logout</Link>
              </Nav.Item>
            </Navbar.Nav>
            <div>
              Logged in as {
                this.props.authedUser.toString()
              }
            </div>

          </Navbar>
          <Switch>
            <Route path={`${this.props.match.path}`} exact component={HomeContainer} />
            <Route path={`${this.props.match.path}/questions/:question_id`} exact component={QuestionContainer} />
            <Route path={`${this.props.match.path}/leaderboard`} component={LeaderboardContainer} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      )
    } else {
      // Simulate an HTTP redirect:
      window.location.replace("http://localhost:3000/");
    }
  }
}


export default App;