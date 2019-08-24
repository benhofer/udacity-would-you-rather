import React from 'react';
import { Card, Button, Alert } from 'bootstrap-4-react';
import NoMatch from './404Page';

const QuestionDetails = (props) => {  
  const rowstyle = {fontSize: '18px', lineHeight: 1.5}
  const handleVote = (whichcase) => {
    props.vote(props.q[0].id, props.users.activeuser, whichcase)
  }

  console.log('props.users.activeuser');
  console.log(props.users.activeuser);

  if (props.users.activeuser) {
    const thisuser = props.users.users.filter((u) => u.name === props.users.activeuser)[0]


    return (
        <div className="p-3" style={{maxWidth: '800px', margin: '0 auto'}}>
          {
            props.q.length === 0 && <NoMatch />
          }
          {props.q.length === 1 && props.q.map((q) => {
            const voted = thisuser.votes[q.id];
            const authoruser = props.users.users.filter((u) => u.name === q.author);
            let vote;
            if (voted) {
              vote = thisuser.votes[q.id];
            }
            return ( 
            <Card className="mb-4" key={q.id}>
              <Card.Header>
                {q.description}
              </Card.Header>
              <Card.Body>
                <Card.Title className="border-bottom pb-2 text-center">Would You Rather...</Card.Title>
                <Card.Text className="d-flex justify-content-between border-bottom pb-2" style={rowstyle}>
                  <div className="pr-4 d-flex">
                    <div style={{width: '100px', fontWeight: 'bold', display: 'inline-block'}}>
                      <div>
                        {q.case1.votes.length ? q.case1.votes.length : '0'} Votes
                      </div>
                      <div>
                        <small>{((q.case1.numvotes*100)/(q.case1.numvotes + q.case2.numvotes)).toFixed(1)}%</small>
                      </div>
                    </div>
                    <div>&bull; {q.case1.text}</div>
                  </div>
                  {
                    voted && vote === 'case1' && 
                    <Alert info>YOUR VOTE</Alert>
                  }
                  {
                    !voted && 
                      <Button onClick={() => handleVote('case1')} primary>
                        Vote
                      </Button>
                  } 
                </Card.Text>
                <Card.Text className="d-flex justify-content-between" style={rowstyle}>
                  <div className="pr-4 d-flex">
                    <div style={{width: '100px', fontWeight: 'bold', display: 'inline-block'}}>
                      <div>{q.case2.numvotes} Votes</div>
                      <div>
                        <small>{((q.case2.numvotes*100)/(q.case1.numvotes + q.case2.numvotes)).toFixed(1)}%</small>
                      </div>
                    </div>
                    <div>
                      &bull; {q.case2.text}
                    </div>
                  </div>
                  {
                    voted && vote === 'case2' && 
                    <Alert info>YOUR VOTE</Alert>
                  }
                  {
                    !voted &&
                      <Button primary onClick={() => handleVote('case2')}>
                        Vote
                      </Button>
                  }
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex">
                <Card.Text> 
                  <img src={`/images/${authoruser.avatar}`} width="50px"></img> <strong>{q.author}</strong> <i className="secondary">posted </i> <strong>{q.time}</strong>
                </Card.Text>
              </Card.Footer>
            </Card>
          )})
        }

      </div>
    )  
  } else {
      return <NoMatch />
  }}

export default QuestionDetails