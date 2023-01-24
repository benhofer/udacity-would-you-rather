import React, { useState, useEffect } from "react";
import { Nav, Navbar } from "bootstrap-4-react";
import { Link } from "react-router-dom";
import { getInitialData } from "../utils/api";

function Header(props) {
  const [authedUserData, setAuthedUserData] = useState(undefined);
  const [logoutView, setLogoutView] = useState(false);

  const logoutOn = () => {
    setLogoutView(true);
  };

  const logoutOff = () => {
    setLogoutView(false);
  };

  useEffect(() => {
    getInitialData()
      .then((res) => {
        setAuthedUserData(res.users[props.authedUser]);
      })
      .catch((error) => console.log(error));
  }, [props.authedUser]);

  console.log(authedUserData);

  return (
    <Navbar expand='lg' light bg='light'>
      <Navbar.Brand href='#'>Would You Rather App</Navbar.Brand>
      <Navbar.Nav mr='auto'>
        <Nav.Item>
          <Link
            className={`${
              window.location.pathname === ("/app" || "/app/") ? "active" : ""
            } nav-link`}
            to={`${props.match.url}`}
          >
            Home
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            className={`${
              window.location.pathname ===
              ("/app/leaderboard/" || "/app/leaderboard")
                ? "active"
                : ""
            } nav-link`}
            to={`${props.match.url}/leaderboard/`}
          >
            Leaderboard
          </Link>
        </Nav.Item>
      </Navbar.Nav>
      {authedUserData && (
        <div onMouseEnter={logoutOn} onMouseLeave={logoutOff}>
          {!logoutView && <span>Logged in as {authedUserData.name}</span>}
          {logoutView && (
            <Link to='/' style={{ display: "inline" }}>
              Logout
            </Link>
          )}
          <img
            src={`/images/${authedUserData.avatar}`}
            width='30'
            alt=''
            style={{ marginLeft: ".5rem" }}
          />
        </div>
      )}
    </Navbar>
  );
}

export default Header;
