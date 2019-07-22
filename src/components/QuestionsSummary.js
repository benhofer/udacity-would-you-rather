import React from 'react';
import { Card } from 'bootstrap-4-react';

const QuestionsSummaryList = () => {

  return (
    <Card>
      <a href>
        <Card.Body>
          <Card.Title>Pizza Toppings</Card.Title>
        </Card.Body>
        <Card.Footer className="d-flex">
          <Card.Text><i className="secondary">Posted</i> <strong>8:45am 9/25/2019</strong> <i>by</i> <strong>Ben</strong></Card.Text>
        </Card.Footer>
      </a>
    </Card>
  )
}

export default QuestionsSummaryList