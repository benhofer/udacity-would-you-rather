import React, { useState, useEffect } from "react";
import { Nav, Navbar } from "bootstrap-4-react";
import { Link } from "react-router-dom";
import { getInitialData } from "../utils/api";
import tom from "../assets/images/tom.png";
import { ThemeProvider } from "@nivo/core";

function Header(props) {
  const [authedUserData, setAuthedUserData] = useState(undefined);

  useEffect(() => {
    getInitialData()
      .then((res) => {
        setAuthedUserData(res.users[props.authedUser]);
      })
      .catch((error) => console.log(error));
  }, [props.authedUser]);

  return (
    <Navbar expand='lg' light bg='light'>
      <Navbar.Brand>Would You Rather App</Navbar.Brand>
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
        <div>
          <span>
            <span className='logged-in-as'>Logged in as</span>{" "}
            {authedUserData.name}
          </span>{" "}
          | &nbsp;
          <Link to='/' style={{ display: "inline" }}>
            Logout
          </Link>
          <img
            src={authedUserData.avatar}
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
