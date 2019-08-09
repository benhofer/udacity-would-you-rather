import React, {Fragment} from 'react';
import { Card } from 'bootstrap-4-react';
import { Link } from "react-router-dom";

const QuestionsSummaryList = (props) => {

  let thisuser = '';

  if (props.users.activeuser) {
    thisuser = props.users.users.filter((u) => u.username === props.users.activeuser)[0];
  } else {
    // Simulate an HTTP redirect:
    window.location.replace("http://localhost:3000/");
  }

  const card = (q) => (
    <Card className="mb-4" key={q.id}>
      <Card.Header>
      <Link to={`/app/questions/${q.id}`}>{q.description}</Link></Card.Header>
      <Card.Body>
        <Card.Text><i className="secondary">Posted</i> <strong>{q.date} at {q.time}</strong> <i>by</i> <strong>{q.author}</strong></Card.Text>
      </Card.Body>
    </Card>
  )

  return (
    <Fragment>
      <div className="p-3" style={{maxWidth: '800px', margin: '0 auto'}}>
        { 
          props.questions.map((q) => (
            <div>
              {
                props.showanswered && 
                  (thisuser.votes.filter((vote) => vote.questionid === q.id).length !== 0 ? card(q) : '')
              }{
                props.showunanswered && 
                  (thisuser.votes.filter((vote) => vote.questionid === q.id).length === 0 ? card(q) : '')
              }
            </div>
        ))}
      </div>
    </Fragment>
  )
}

export default QuestionsSummaryList