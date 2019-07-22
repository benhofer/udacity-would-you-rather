import React from 'react';
import { Form} from 'bootstrap-4-react';
import {Link} from 'react-router-dom';

const LoginForm = (props) => {

  const handleSignIn = () => {
    props.loginUser(document.getElementById('selectUser').value);
  }
  
  return (
    <Form>
        <label htmlFor="selectUser">Example select</label>
        <Form.Select id="selectUser" className="mb-2">
          <option>Ben</option>
          <option>Lauren</option>
          <option>Kate</option>
          <option>Julie</option>
          <option>John</option>
        </Form.Select>
        <Link className="btn btn-primary" to="/app" onClick={handleSignIn}>Sign In</Link>
      </Form>
  )
}

export default LoginForm;