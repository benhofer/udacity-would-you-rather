import React from 'react';
import { Navbar, Nav, Collapse} from 'bootstrap-4-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeContainer from '../containers/HomeContainer';
import LeaderboardContainer from '../containers/LeaderboardContainer';
import { connect } from 'react-redux'

const mapStateToProps = state => state;

const UserName = (props) => {
  return (
    <div>
      Logged in as {
        props.users.activeuser
      }
    </div>
  )
}

const UserNameContainer = connect(
  mapStateToProps
)(UserName);


const App = ({match}) => {
  console.log(match)
  return (
    <div>
      <Navbar expand="lg" light bg="light">
        <Navbar.Brand href="#">
          Would You Rather App        
        </Navbar.Brand>
        <div className="d-flex justify-content-around">
          <Navbar.Nav mr="auto">
            <Nav.Item active>
              <a className="nav-link" href={`${match.url}`}>Home</a>
            </Nav.Item>
            <Nav.Item>
              <a className="nav-link" href={`${match.url}/leaderboard/`}>Leaderboard</a>
            </Nav.Item>
            <Nav.Item>
              <a className="nav-link" href="/">Logout</a>
            </Nav.Item> 
          </Navbar.Nav>
          <UserNameContainer /> 
        </div>
      </Navbar>
      <Router>
        <Route path={`${match.path}`} exact component={HomeContainer} />
        <Route path={`${match.path}/leaderboard`} component={LeaderboardContainer} />
      </Router>
    </div>
  ) 
}

export default App;

