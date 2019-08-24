import React from 'react';
import { Navbar, Nav } from 'bootstrap-4-react';
import { Switch, Route, Link } from "react-router-dom";
import HomeContainer from '../containers/HomeContainer';
import LeaderboardContainer from '../containers/LeaderboardContainer';
import QuestionContainer from '../containers/QuestionContainer';
import { connect } from 'react-redux';
import NoMatch from "./404Page";

const mapStateToProps = state => state;

const UserName = (props) => {

  return (
    <div>
      Logged in as {
        props.users.activeuser.name
      }
    </div>
  )
}

const UserNameContainer = connect(
  mapStateToProps
)(UserName);

const App = ({ match }, props) => {
  if (props) {
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
                to={`${match.url}`}
              >Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                className={`${window.location.pathname === ('/app/leaderboard/' || '/app/leaderboard') ? 'active' : ''} nav-link`}
                to={`${match.url}/leaderboard/`}
              >Leaderboard</Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                className="nav-link"
                to="/"
              >Logout</Link>
            </Nav.Item>
          </Navbar.Nav>
          <UserNameContainer />
        </Navbar>
        <Switch>
          <Route path={`${match.path}`} exact component={HomeContainer} />
          <Route path={`${match.path}/questions/:question_id`} exact component={QuestionContainer} />
          <Route path={`${match.path}/leaderboard`} component={LeaderboardContainer} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    )
  } else {
    // Simulate an HTTP redirect:
    window.location.replace("http://localhost:3000/");
  }
}


export default App;