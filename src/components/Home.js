import React, { useState } from 'react';
import Bootstrap, { Button, Modal, Form } from 'bootstrap-4-react';
import QuestionsSummary from './QuestionsSummary';
import Checkbox from './Checkbox';
import { saveQuestionAPI } from '../utils/api';

const Home = (props) => {

  const [title, setTitle] = useState(undefined);
  const [case1, setCase1] = useState(undefined);
  const [case2, setCase2] = useState(undefined);

  const [showAnswered, setShowAnswered] = useState(false);
  const [showUnanswered, setShowUnanswered] = useState(true);

  const handleAnsweredClick = () => {
    setShowAnswered(showAnswered ? false : true);
  }

  const handleUnansweredClick = () => {
    setShowUnanswered(showUnanswered ? false : true)
  }

  const handleTitleKeyUp = (e) => {
    const val = e.target.value;
    setTitle(val);
  }

  const handleCase1KeyUp = (e) => {
    setCase1(e.target.value);
  }

  const handleCase2KeyUp = (e) => {
    setCase2(e.target.value);
  }

  function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }
  const saveQuestion = () => {
    props.addQuestion( generateUID(), title, case1, case2, props.authedUser);
  }

  const handleAskQuestion = () => {
    Bootstrap.modal('#newQuestionModal');
  }

  return (
    <div className="p-3">
      <div className="d-flex pb-4 justify-content-between" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Button primary data-toggle="modal" data-target="#newQuestionModal">New Question</Button>
        <Form>
          <Form.Group>
            <div className="d-flex">

              <Checkbox label="Unanswered" isSelected={showUnanswered}
                onCheckboxChange={handleUnansweredClick} />

              <Checkbox label="Answered" isSelected={showAnswered}
                onCheckboxChange={handleAnsweredClick} />

            </div>
          </Form.Group>
        </Form>
      </div>

      <QuestionsSummary handleAskQuestion={() => handleAskQuestion()} questions={props.questions} authedUser={props.authedUser} users={props.users} vote={props.vote} showAnswered={showAnswered} showUnanswered={showUnanswered} />

      {/* Modal */}
      <Modal id="newQuestionModal" fade>
        <Modal.Dialog>
          <Modal.Content>

            <Modal.Header>
              <Modal.Title>Add Question</Modal.Title>
              <Modal.Close>
                <span aria-hidden="true">&times;</span>
              </Modal.Close>
            </Modal.Header>

            <Modal.Body>
              <div className="form-group">
                <label htmlFor="titleInput" style={{ width: '100%', textAlign: 'center' }}>Title</label>
                <input onKeyUp={handleTitleKeyUp} type="text" className="form-control" id="titleInput" placeholder="Enter title"></input>
              </div>
              <h2 style={{ textAlign: 'center' }}>Would you rather ...</h2>
              <div className="form-group">
                <input onKeyUp={handleCase1KeyUp} type="text" className="form-control" id="case1Input" placeholder="Case 1" />
              </div>
              <div className="form-group">
                <label htmlFor="case2Input" style={{ textAlign: 'center', width: '100%' }}>OR</label>
                <input onKeyUp={handleCase2KeyUp} type="text" className="form-control" id="case2Input" placeholder="Case 2" />
              </div>
              <h2 style={{ textAlign: 'center', margin: '0 auto', width: '40px', height: '40px', borderRadius: '40px', background: 'black', color: 'white' }}>?</h2>
            </Modal.Body>

            <Modal.Footer>
              <Button secondary data-dismiss="modal">Close</Button>
              <Button primary data-dismiss="modal" onClick={saveQuestion}>Save Question</Button>
            </Modal.Footer>

          </Modal.Content>
        </Modal.Dialog>
      </Modal>
    </div>
  )
};

export default Home;