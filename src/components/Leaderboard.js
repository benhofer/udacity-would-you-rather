import React from 'react';
import { Card } from 'bootstrap-4-react';


const Leaderboard = (props) => {  
  const rowstyle = {fontSize: '18px', lineHeight: 1.5};
  const [ users ] = [ props.users.users, props.questions ]; 

  let leaderboard = users.map((user) => {
    const score = user.numquestions + user.numvotes;

    return (
      <Card key="score" className="mb-4">
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
                <div>{score} Total Points</div>
              </div>
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    
  )})

  leaderboard = leaderboard.sort((a,b) => (a.key - b.key));

  return (
    <div className="p-3" style={{maxWidth: '800px', margin: '0 auto'}}>
      { leaderboard }
    </div>
  )
}

export default Leaderboard; 