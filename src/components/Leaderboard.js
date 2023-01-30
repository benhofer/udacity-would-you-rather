import React from "react";
import MyResponsivePie from "./PieChart";
import { Card } from "bootstrap-4-react";

const Leaderboard = (props) => {
  const rowstyle = { fontSize: "18px", lineHeight: 1.5 };
  const [users] = [props.users];

  let leaderboard = Object.values(users).map((user) => {
    const score = user.numquestions + user.numvotes;

    const data = [
      {
        id: "Cards Created",
        label: "Cards Created",
        value: user.numquestions,
        color: "hsl(2, 88%, 51%)",
      },
      {
        id: "Votes",
        label: "Votes",
        value: user.numvotes,
        color: "#61dafb",
      },
    ];

    return (
      <Card key={`${user.name}_${score}`} className='mb-4'>
        <Card.Header className='border-bottom pb-2'>
          <h1 style={{ fontSize: "1rem", fontWeight: 600 }}>{user.name}</h1>
        </Card.Header>
        <Card.Body className='d-flex justify-content-between leaderboard-card-body'>
          <div className='pr-4'>
            <img
              alt={user.name}
              src={`/images/${user.avatar}`}
              width='150px'
            ></img>
          </div>
          <div>
            <div className='d-flex justify-content-between' style={rowstyle}>
              <div className='pr-4 d-flex'>
                <div>
                  <div style={{ fontSize: "5rem", textAlign: "center" }}>
                    {score}
                  </div>{" "}
                  Total Points
                </div>
              </div>
            </div>
          </div>
          <div style={{ height: "180px", width: "300px" }}>
            <MyResponsivePie data={data} />
          </div>
        </Card.Body>
      </Card>
    );
  });

  leaderboard = leaderboard.sort((a, b) => {
    return b.key.toString().match(/\d+/)[0] - a.key.toString().match(/\d+/)[0];
  });

  return (
    <div className='p-3' style={{ maxWidth: "800px", margin: "0 auto" }}>
      {leaderboard}
    </div>
  );
};

export default Leaderboard;
