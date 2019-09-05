import React from 'react';
import { Form } from 'bootstrap-4-react';
import { Link } from 'react-router-dom';
import { handleInitialData } from '../actions/shared'

const LoginForm = (props) => {
  handleInitialData();

  const handleSignIn = (name) => {
    let id;
    const dispatch = props.dispatch;
    switch (name) {
      case 'Tyler McGinnis':
        id = 'tylermcginnis';
        break;
      case 'Sarah Edo':
        id = 'sarahedo';
        break;
      case 'John Doe':
        id = 'johndoe';
        break;
    }
    dispatch(handleInitialData(id));
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
        <Link className="btn btn-primary" to="/app" onClick={() => handleSignIn(document.getElementById('selectUser').value)}>Sign In</Link>
      </div>
      <small style={{ float: 'right' }}>User images courtesy of <a target="_blank" href="https://unsplash.com/">Unsplash</a></small>
    </Form>
  )
}

export default LoginForm;