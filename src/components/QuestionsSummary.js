import React, { Fragment } from "react";
import { Card, Badge } from "bootstrap-4-react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const QuestionsSummary = (props) => {
  let thisuser = "";

  if (props.authedUser) {
    thisuser = props.users[props.authedUser];
  } else {
    // Simulate an HTTP redirect:
    window.location.replace("http://localhost:3000/");
  }

  const card = (q, authoruser) => (
    <Card className='mb-4' key={q.id}>
      <Card.Header>
        <Link to={`/app/questions/${q.id}`}>{q.description}</Link>
        {thisuser.votes[q.id] ? (
          <Badge bg='primary' style={{ float: "right", color: "white" }}>
            <Icon icon='material-symbols:check' />
            &nbsp;I Voted
          </Badge>
        ) : (
          ""
        )}
      </Card.Header>
      <Card.Body>
        <div>
          <img
            alt={authoruser.name}
            src={`/images/${authoruser.avatar}`}
            width='30px'
            className='mr-4'
          ></img>
          <strong>{q.author}</strong> <i className='secondary'>Posted</i>{" "}
          <strong>{q.date}</strong> <i> at </i> <strong>{q.time}</strong>
        </div>
      </Card.Body>
    </Card>
  );

  let questions = Object.values(props.questions).map((q) => {
    const authoruser = props.users[q.author];

    return (
      <div key={q.ts} value={q.time}>
        {/* {console.log("QS Filters", props.filters.filters)} */}
        {props?.filters?.filters?.answered &&
          (thisuser.votes[q.id] ? card(q, authoruser) : "")}
        {props?.filters?.filters?.unanswered &&
          (thisuser.votes[q.id] ? "" : card(q, authoruser))}
      </div>
    );
  });

  questions = questions.sort((a, b) => b.key - a.key);

  return (
    <Fragment>
      <div className='p-3' style={{ maxWidth: "800px", margin: "0 auto" }}>
        {questions.length > 0 && questions}
        {questions.length === 0 && (
          <Card>
            <Card.Header>Nobody has created any questions yet.</Card.Header>
          </Card>
        )}
      </div>
    </Fragment>
  );
};

export default QuestionsSummary;
