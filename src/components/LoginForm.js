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
          <option>Tyler McGinnis</option>
          <option>Sarah Edo</option>
          <option>John Doe</option>
        </Form.Select>
        <div>
          <Link className="btn btn-primary" to="/app" onClick={handleSignIn}>Sign In</Link>
        </div>
        <small style={{ float: 'right'}}>User images courtesy of <a target="_blank" href="https://unsplash.com/">Unsplash</a></small>
      </Form>
  )
}

export default LoginForm;