import React from 'react';
import { Navbar, Nav, Button, Modal, Form, Collapse, Card } from 'bootstrap-4-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Leaderboard from "./Leaderboard";

function App() {
  return (
    <Router>
      <div className="App">
        
        <Navbar expand="lg" light bg="light">
          <Navbar.Brand href="#">
            Would You Rather App        
          </Navbar.Brand>
          <Navbar.Toggler target="#navbarSupportedContent" />
          <Collapse navbar id="navbarSupportedContent">
            <Navbar.Nav mr="auto">
              <Nav.Item active>
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link><Link to="/leaderboard">Leaderboard</Link></Nav.Link>
              </Nav.Item>
            </Navbar.Nav>
          </Collapse>
        </Navbar>
        
        <Route path="/" exact component={Home} />
        <Route path="/leaderboard" exact component={Leaderboard} /> 

      </div>
    </Router>
  );
}

export default App;
