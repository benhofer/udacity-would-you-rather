import React from 'react';
import { Card } from 'bootstrap-4-react';
import LoginContainer from '../containers/LoginContainer.js';

const Login = () => {

  localStorage.clear();

  return (
    <div className="p-3" style={{maxWidth: '800px', margin: '100px auto'}}>
      <h1>Would You Rather App</h1>
      <Card>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <LoginContainer />
        </Card.Body>
      </Card>
    </div>
  )
}

export default Login;