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
              <Link 
                className="nav-link" 
                to={`${match.url}`}
                activeStyle={{
                  textDecoration: 'none',
                  color: 'black'
                }}>Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link 
                className="nav-link" 
                to={`${match.url}/leaderboard/`}
                activeStyle={{
                  textDecoration: 'none',
                  color: 'black'
                }}>Leaderboard</Link>
            </Nav.Item>
            <Nav.Item>
              <Link 
                className="nav-link" 
                to="/"
                activeStyle={{
                  textDecoration: 'none',
                  color: 'black'
                }}>Logout</Link>
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

