import React from 'react';
import { Card } from 'bootstrap-4-react';

const NoMatch = () => {
  
  return (
    <div className="p-3" style={{maxWidth: '800px', margin: '100px auto'}}>
      <h1>Page Not Found</h1>
      <Card>
        <Card.Body>
          <p>The URL you entered is not available. Please try again or <a href="/">Login</a>.</p>
        </Card.Body>
      </Card>
    </div>
  )
}

export default NoMatch;