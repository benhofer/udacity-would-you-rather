import React from 'react';
import { Card } from 'bootstrap-4-react';
import LoginContainer from '../containers/LoginContainer.js';

const Login = () => {
  
  return (
    <div className="p-3">
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