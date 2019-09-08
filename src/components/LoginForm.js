import React from 'react';
import { Form, Card } from 'bootstrap-4-react';


const LoginForm = (props) => {
  const addHistory = () => {
    props.history.push('/app');
  }

  const handleSignIn = (name) => {
    let id;
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
    props.getData(id, addHistory);
  }

  return (
      <div className="p-3" style={{ maxWidth: '800px', margin: '100px auto' }}>
        <h1>Would You Rather App</h1>
        <Card>
          <Card.Body>
            <Card.Title>Login</Card.Title>
            <Form>
              <label htmlFor="selectUser">Example select</label>
              <Form.Select id="selectUser" className="mb-2">
                <option>Tyler McGinnis</option>
                <option>Sarah Edo</option>
                <option>John Doe</option>
              </Form.Select>
              <div>
                <span className="btn btn-primary" to="/app" onClick={() => handleSignIn(document.getElementById('selectUser').value)}>Sign In</span>
              </div>
              <small style={{ float: 'right' }}>User images courtesy of <a target="_blank" href="https://unsplash.com/">Unsplash</a></small>
            </Form>        
          </Card.Body>
        </Card>
      </div>
    )
  }

export default LoginForm;