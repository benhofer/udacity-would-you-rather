import React, { useState } from "react";
import Bootstrap, { Button, Modal, Form } from "bootstrap-4-react";
import QuestionsSummary from "./QuestionsSummary";
import FilterControlsContainer from "../containers/FilterControlsContainer";
import { Icon } from "@iconify/react";

const Home = (props) => {
  const [title, setTitle] = useState(undefined);
  const [case1, setCase1] = useState(undefined);
  const [case2, setCase2] = useState(undefined);
  const [error, setError] = useState(false);

  const handleTitleKeyUp = (e) => {
    setError(false);
    const val = e.target.value;
    setTitle(val);
  };

  const handleCase1KeyUp = (e) => {
    setError(false);
    setCase1(e.target.value);
  };

  const handleCase2KeyUp = (e) => {
    setError(false);
    setCase2(e.target.value);
  };

  function generateUID() {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }
  const saveQuestion = () => {
    if (
      title &&
      title.length > 0 &&
      case1 &&
      case1.length > 0 &&
      case2 &&
      case2.length > 0
    ) {
      props.addQuestion(generateUID(), title, case1, case2, props.authedUser);
      Bootstrap.modal("#newQuestionModal", "hide");
    } else {
      setError(true);
    }
  };

  const handleAskQuestion = () => {
    Bootstrap.modal("#newQuestionModal");
  };

  return (
    <div className='p-3'>
      <div
        className='d-flex pb-4 justify-content-between'
        style={{ maxWidth: "800px", margin: "0 auto" }}
      >
        <Button
          primary
          onClick={() => Bootstrap.modal("#newQuestionModal")}
          data-target='#newQuestionModal'
        >
          <Icon icon='ic:baseline-plus' />
          &nbsp;New Card
        </Button>

        <FilterControlsContainer />
      </div>

      <QuestionsSummary
        handleAskQuestion={() => handleAskQuestion()}
        questions={props.questions}
        authedUser={props.authedUser}
        filters={props.filters}
        users={props.users}
        vote={props.vote}
      />

      {/* Modal */}
      <Modal id='newQuestionModal' fade>
        <Modal.Dialog>
          <Modal.Content>
            <Modal.Header>
              <Modal.Title>
                <Icon icon='material-symbols:plus' />
                New Card
              </Modal.Title>
              <Modal.Close>
                <span aria-hidden='true'>&times;</span>
              </Modal.Close>
            </Modal.Header>

            <Modal.Body>
              {error && (
                <div className='alert alert-danger' role='alert'>
                  Please fill in all the fields - Title, Case 1 and Case 2.
                </div>
              )}
              <div className='form-group'>
                <label
                  htmlFor='titleInput'
                  style={{
                    width: "100%",
                    textAlign: "center",
                    display: "none",
                  }}
                >
                  Card Title
                </label>
                <input
                  onKeyUp={handleTitleKeyUp}
                  type='text'
                  className='form-control'
                  id='titleInput'
                  placeholder='Card title'
                ></input>
              </div>
              <div style={{ padding: "1rem", border: "1px solid black" }}>
                <h2 style={{ textAlign: "center" }}>Would you rather ...</h2>
                <div className='form-group'>
                  <input
                    onKeyUp={handleCase1KeyUp}
                    type='text'
                    className='form-control'
                    id='case1Input'
                    placeholder='Case 1'
                  />
                </div>
                <div className='form-group'>
                  <label
                    htmlFor='case2Input'
                    style={{ textAlign: "center", width: "100%" }}
                  >
                    OR
                  </label>
                  <input
                    onKeyUp={handleCase2KeyUp}
                    type='text'
                    className='form-control'
                    id='case2Input'
                    placeholder='Case 2'
                  />
                </div>
                <h2
                  style={{
                    textAlign: "center",
                    margin: "0 auto",
                    width: "40px",
                    height: "40px",
                    borderRadius: "40px",
                    background: "black",
                    color: "white",
                  }}
                >
                  ?
                </h2>
              </div>
            </Modal.Body>

            <Modal.Footer>
              <Button secondary data-dismiss='modal'>
                Close
              </Button>
              <Button primary onClick={saveQuestion}>
                Save Question
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Dialog>
      </Modal>
    </div>
  );
};

export default Home;
