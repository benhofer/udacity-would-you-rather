import React from "react";
import { Form, Card } from "bootstrap-4-react";
import tom from "../assets/images/tom.png";
import scarlett from "../assets/images/scarlett.png";
import richard from "../assets/images/richard.png";

const LoginForm = (props) => {
  const addHistory = () => {
    props.history.push("/app");
  };

  const handleSignIn = (name) => {
    let id;
    switch (name) {
      case "Tom":
        id = "Tom";
        break;
      case "Scarlett":
        id = "Scarlett";
        break;
      case "Richard":
        id = "Richard";
        break;
      default:
        console.error("The selected name has no match.");
    }
    props.getData(id, addHistory);
  };

  return (
    <div className='p-3' style={{ maxWidth: "800px", margin: "100px auto" }}>
      <h1>Would You Rather App</h1>
      <Card>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Form>
            <label htmlFor='selectUser'>Example select</label>
            <Form.Select id='selectUser' className='mb-2'>
              <option>Tom</option>
              <option>Scarlett</option>
              <option>Richard</option>
            </Form.Select>
            <div>
              <span
                className='btn btn-primary'
                tabIndex='0'
                to='/app'
                onClick={() =>
                  handleSignIn(document.getElementById("selectUser").value)
                }
                onKeyUp={(e) => {
                  if (e.key === "Enter") {
                    handleSignIn(document.getElementById("selectUser").value);
                  } else {
                    return;
                  }
                }}
              >
                Sign In
              </span>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginForm;
