import React, {Fragment} from 'react';
import Bootstrap, { Card } from 'bootstrap-4-react';
import { Link } from "react-router-dom";

const QuestionsSummaryList = (props) => {

  let thisuser = '';

  if (props.users.activeuser) {
    thisuser = props.users.users.filter((u) => u.name === props.users.activeuser)[0];
  } else {
    // Simulate an HTTP redirect:
    window.location.replace("http://localhost:3000/");
  }

  const card = (q, authoruser) => (
    <Card className="mb-4" key={q.id}>
      {console.log(authoruser)}
      <Card.Header>
      <Link to={`/app/questions/${q.id}`}>{q.description}</Link></Card.Header>
      <Card.Body>
        <Card.Text>
          <img src={`/images/${authoruser.avatar}`} width="50px" className="mr-4"></img> 
          <strong>{q.author}</strong> <i className="secondary">Posted</i> <strong>{q.time}</strong></Card.Text>
      </Card.Body>
    </Card>
  )

  let questions = props.questions.map((q) => {    

    const authoruser = props.users.users.filter((u) => u.id === q.author)[0];
     
    return (
     <div key={q.id}>
       {
         props.showAnswered && 
           (thisuser.votes[q.id] ? card(q, authoruser) : '')
       }{
         props.showUnanswered && 
           (thisuser.votes[q.id] ? '' : card(q, authoruser))
       }
     </div>
   )})

  questions = questions.sort((a, b) => (b.key - a.key));

  const handleAskQuestion = () => {
    console.log(Bootstrap);
  }

  return (
    <Fragment>
      <div className="p-3" style={{maxWidth: '800px', margin: '0 auto'}}>

        { questions.length > 0 && questions }
        { questions.length === 0 &&
        
          <Card>
            <Card.Header>Nobody has created any questions yet.</Card.Header>
            <Card.Body>
              <Card.Text>
                <span style={{color: '#007bff', cursor: 'pointer'}} onClick={() => props.handleAskQuestion()}>Ask a Question!</span>
              </Card.Text>
            </Card.Body>

          </Card>
        }


      </div>
    </Fragment>
  )
}

export default QuestionsSummaryList