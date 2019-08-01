import React from 'react';
import { Card } from 'bootstrap-4-react';

const Leaderboard = (props) => {
  console.log(props.questions)

  return (
    <div className="p-3">
      { 
        props.questions.map((q) => (
            <Card>
              <Card.Header>{q.description}</Card.Header>
              <Card.Body>
                <Card.Title>Would You Rather...</Card.Title>
                <Card.Text>
                  {q.case1.text}
                </Card.Text>
                <Card.Text>
                  {q.case2.text}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex">
                <Card.Text><i className="secondary">Posted</i> <strong>8:45am 9/25/2019</strong> <i>by</i> <strong>Ben</strong></Card.Text>
              </Card.Footer>
          </Card>
        ))}
    </div>
  )
}

export default Leaderboard; 