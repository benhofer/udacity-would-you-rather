import React from 'react';
import { Card } from 'bootstrap-4-react';

const Leaderboard = () => {
  return (
    <div className="p-3">
      <Card>
        <Card.Header>Pizza Toppings</Card.Header>
        <Card.Body>
          <Card.Title>Would You Rather...</Card.Title>
          <Card.Text>
            Blah blah
          </Card.Text>
          <Card.Text>
            Blah blah
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex">
          <Card.Text><i className="secondary">Posted</i> <strong>8:45am 9/25/2019</strong> <i>by</i> <strong>Ben</strong></Card.Text>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default Leaderboard; 