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
        props.users.map(user => (
          user.active === true ? <span>{user.username}</span> : null
        ))
      }
    </div>
  )
}

const UserNameContainer = connect(
  mapStateToProps
)(UserName);


const App = (props) => {
  return (
    <div>
      <Navbar expand="lg" light bg="light">
        <Navbar.Brand href="#">
          Would You Rather App        
        </Navbar.Brand>
        <div className="d-flex justify-content-around">
          <Navbar.Nav mr="auto">
            <Nav.Item active>
              <Link className="nav-link" to="/">Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/">Logout</Link>
            </Nav.Item> 
          </Navbar.Nav>
          <UserNameContainer /> 
        </div>
      </Navbar>
      <Route path="/app/home" exact component={HomeContainer} />
      <Route path="/app/leaderboard" exact component={LeaderboardContainer} />
    </div>
  )
}

export default App;

