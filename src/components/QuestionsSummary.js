import React, {Fragment} from 'react';
import { Card } from 'bootstrap-4-react';

const QuestionsSummaryList = (props) => {

  return (
    <Fragment>
      { props.questions !== undefined && 
          props.questions.map((q) => (
            <Card className="mb-4">
                <a href>
                  <Card.Body>
                    <Card.Title>{q.description}</Card.Title>
                  </Card.Body>
                  <Card.Footer className="d-flex">
                    <Card.Text><i className="secondary">Posted</i> <strong>8:45am 9/25/2019</strong> <i>by</i> <strong>{q.author}</strong></Card.Text>
                  </Card.Footer>
                </a>
            </Card>
      ))}

    </Fragment>

  )
}

export default QuestionsSummaryList