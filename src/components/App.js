import React from 'react';
import { Navbar, Nav } from 'bootstrap-4-react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
  return (
    <div>
      <Navbar expand="lg" light bg="light">
        <Navbar.Brand href="#">
          Would You Rather App        
        </Navbar.Brand>
        <div className="d-flex justify-content-around">
          <Navbar.Nav mr="auto">
            <Nav.Item>
              <Link 
                className={`${window.location.pathname === ('/app' || '/app/') ? 'active' : ''} nav-link`}
                to={`${match.url}`}
                >Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link 
                className={`${window.location.pathname  === ('/app/leaderboard/' || '/app/leaderboard') ? 'active' : ''} nav-link`}
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
        </div>
      </Navbar>
      <Switch>
        <Route path={`${match.path}`} exact component={HomeContainer} />
        <Route path={`${match.path}/leaderboard`} component={LeaderboardContainer} />
      </Switch>
    </div>
  ) 
}

export default App;

