import React from 'react';
import { Card, Button } from 'bootstrap-4-react';


const Leaderboard = (props) => {  
  const rowstyle = {fontSize: '18px', lineHeight: 1.5};
  const [ users, questions ] = [ props.users.users, props.questions ]; 

  return (
    <div className="p-3" style={{maxWidth: '800px', margin: '0 auto'}}>
      { 
        users.map((user) => (
          
            <Card className="mb-4">
              <Card.Body className="d-flex">
                <div className="pr-4">
                  <img src={`/images/${user.avatar}`} width="150px"></img>
                </div>
                <div>
                  <Card.Title className="border-bottom pb-2">{user.username}</Card.Title>
                  <Card.Text className="d-flex justify-content-between border-bottom pb-2" style={rowstyle}>
                    <div className="pr-4 d-flex">
                      <div>{user.numvotes} Answered Question(s)</div>
                    </div>
                  </Card.Text>
                  <Card.Text className="d-flex justify-content-between" style={rowstyle}>
                    <div className="pr-4 d-flex">
                      <div>{user.numquestions} Created Question(s)</div>
                    </div>
                  </Card.Text>
                  <Card.Text className="d-flex justify-content-between" style={rowstyle}>
                    <div className="pr-4 d-flex">
                      <div>{user.numquestions + user.numvotes} Total Points</div>
                    </div>
                  </Card.Text>
                </div>
              </Card.Body>
          </Card>
        ))}
    </div>
  )
}

export default Leaderboard; 