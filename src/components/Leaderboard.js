import React from 'react';
import { Card, Button, Modal  } from 'bootstrap-4-react';


const Leaderboard = (props) => {  
  const rowstyle = {fontSize: '18px', lineHeight: 1.5}
  return (
    <div className="p-3" style={{maxWidth: '800px', margin: '0 auto'}}>
      { 
        props.questions.map((q) => (

            <Card className="mb-4">
              <Card.Header>{q.description}</Card.Header>
              <Card.Body>
                <Card.Title className="border-bottom pb-2 text-center">Would You Rather...</Card.Title>
                <Card.Text className="d-flex justify-content-between border-bottom pb-2" style={rowstyle}>
                  <div className="pr-4 d-flex">
                    <div style={{width: '100px', fontWeight: 'bold', display: 'inline-block'}}>{q.case1.numvotes} Votes</div>
                    <div>&bull; {q.case1.text}</div>
                  </div>
                  <Button onClick={() => props.vote(q.id, props.users.activeuser, 'case1')} primary>
                    Vote
                  </Button>
                </Card.Text>
                <Card.Text className="d-flex justify-content-between" style={rowstyle}>
                  <div className="pr-4 d-flex">
                    <div style={{width: '100px', fontWeight: 'bold', display: 'inline-block'}}>{q.case2.numvotes} Votes</div>
                    <div>&bull; {q.case2.text}</div>
                  </div>
                  <Button primary onClick={() => props.vote(q.id, props.users.activeuser, 'case2')}>
                    Vote
                  </Button>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex">
                <Card.Text><i className="secondary">Posted</i> <strong>{q.date} at {q.time}</strong> <i>by</i> <strong>{q.author}</strong></Card.Text>
              </Card.Footer>
          </Card>
        ))}
    </div>
  )
}

export default Leaderboard; 