import React, {Fragment} from 'react';
import { Card } from 'bootstrap-4-react';
import { Link } from "react-router-dom";

const QuestionsSummaryList = (props) => {

  const rowstyle = {fontSize: '18px', lineHeight: 1.5}

  return (
    <Fragment>
      <div className="p-3" style={{maxWidth: '800px', margin: '0 auto'}}>
        { 
          props.questions.map((q) => (
            <Card className="mb-4" key={q.id}>
              <Card.Header>
              <Link to={`/app/questions/${q.id}`}>{q.description}</Link></Card.Header>
              <Card.Body>
                <Card.Text><i className="secondary">Posted</i> <strong>{q.date} at {q.time}</strong> <i>by</i> <strong>{q.author}</strong></Card.Text>
              </Card.Body>
          </Card>
        ))}
      </div>
    </Fragment>

  )
}

export default QuestionsSummaryList