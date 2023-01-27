import React from "react";
import { Card, Button, Alert } from "bootstrap-4-react";
import NoMatch from "./404Page";
import { Link } from "react-router-dom";

const QuestionDetails = (props) => {
  const rowstyle = { fontSize: "18px", lineHeight: 1.5 };
  const handleVote = (whichcase) => {
    props.vote(props.q[0].id, props.authedUser, whichcase);
  };

  if (props.authedUser) {
    const thisuser = props.authedUser;

    return (
      <div className='p-3' style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Link style={{ display: "block", marginBottom: ".5rem" }} to='/app'>
          Back
        </Link>
        {props.q.length === 0 && <NoMatch />}

        {props.q.length === 1 &&
          props.q.map((q) => {
            const voted = props.users[thisuser].votes[q.id];

            let vote;
            if (voted) {
              vote = props.users[thisuser].votes[q.id];
            }
            return (
              <Card className='mb-4' key={q.id}>
                <Card.Header>{q.description}</Card.Header>
                <Card.Body>
                  <Card.Title className='border-bottom pb-2 text-center'>
                    Would You Rather...
                  </Card.Title>
                  <div
                    className='d-flex justify-content-between border-bottom pb-2'
                    style={rowstyle}
                  >
                    <div className='pr-4 d-flex'>
                      <div
                        style={{
                          width: "100px",
                          fontWeight: "bold",
                          display: "inline-block",
                        }}
                      >
                        <div>
                          {q.case1.votes.length ? q.case1.votes.length : "0"}{" "}
                          Votes
                        </div>
                        <div>
                          <small>
                            {q.case1.numvotes
                              ? (
                                  (q.case1.numvotes * 100) /
                                  (q.case1.numvotes + q.case2.numvotes)
                                ).toFixed(1)
                              : 0}
                            %{" "}
                          </small>
                        </div>
                      </div>
                      <div>&bull; {q.case1.text}</div>
                    </div>
                    {voted && vote === "case1" && <Alert info>YOUR VOTE</Alert>}
                    {!voted && (
                      <Button onClick={() => handleVote("case1")} primary>
                        Vote
                      </Button>
                    )}
                  </div>
                  <div
                    className='d-flex justify-content-between pt-2'
                    style={rowstyle}
                  >
                    <div className='pr-4 d-flex'>
                      <div
                        style={{
                          width: "100px",
                          fontWeight: "bold",
                          display: "inline-block",
                        }}
                      >
                        <div>{q.case2.numvotes} Votes</div>
                        <div>
                          <small>
                            {q.case2.numvotes
                              ? (
                                  (q.case2.numvotes * 100) /
                                  (q.case1.numvotes + q.case2.numvotes)
                                ).toFixed(1)
                              : 0}
                            %{" "}
                          </small>
                        </div>
                      </div>
                      <div>&bull; {q.case2.text}</div>
                    </div>
                    {voted && vote === "case2" && <Alert info>YOUR VOTE</Alert>}
                    {!voted && (
                      <Button primary onClick={() => handleVote("case2")}>
                        Vote
                      </Button>
                    )}
                  </div>
                </Card.Body>
                <Card.Footer className='d-flex'>
                  <div>
                    <img
                      alt=''
                      src={`/images/${props.users[q.author].avatar}`}
                      width='50px'
                    ></img>{" "}
                    <strong>{q.author}</strong>{" "}
                    <i className='secondary'>posted </i>{" "}
                    <strong>{q.date}</strong> <i> at </i>{" "}
                    <strong>{q.time}</strong>
                  </div>
                </Card.Footer>
              </Card>
            );
          })}
      </div>
    );
  } else {
    return <NoMatch />;
  }
};

export default QuestionDetails;
