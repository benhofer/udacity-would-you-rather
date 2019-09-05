import React, { useState } from 'react';
import Bootstrap, { Button, Modal, Form } from 'bootstrap-4-react';
import QuestionsSummary from './QuestionsSummary';
import Checkbox from './Checkbox';
import { saveQuestionAPI } from '../utils/api';

const Home = (props) => {

  const [title, setTitle] = useState(undefined);
  const [case1, setCase1] = useState(undefined);
  const [case2, setCase2] = useState(undefined);

  var lsShowAnswered, lsShowUnanswered;

  const [showAnswered, setShowAnswered] = useState(false);
  const [showUnanswered, setShowUnanswered] = useState(true);

  const setLsValue = (cbval, setval) => {
    localStorage.setItem(cbval, setval);
  }

  const handleAnsweredClick = () => {
    showAnswered ? setLsValue('showAnswered', false) : setLsValue('showAnswered', true);
    setShowAnswered(showAnswered ? false : true);
  }

  const handleUnansweredClick = () => {
    showUnanswered ? setLsValue('showUnanswered', false) : setLsValue('showUnanswered', true);
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

  const saveQuestion = () => {
    saveQuestionAPI({
      id: 'loxhs1bqm25b708cmbf3g',
      author: 'tylermcginnis',
      time: new Date().toString(),
      description: 'Coding Skills',
      case1: {
        votes: [],
        numvotes: 0,
        text: 'be a front-end developer',
      },
      case2: {
        votes: ['sarahedo'],
        numvotes: 1,
        text: 'be a back-end developer'
      }
    });
    console.log('save Question by');
    console.log(props.users.activeuser.id)
    props.addQuestion(new Date().getTime(), title, case1, case2, props.users.activeuser.id);
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

      <QuestionsSummary handleAskQuestion={() => handleAskQuestion()} questions={props.questions} users={props.users} vote={props.vote} showAnswered={showAnswered} showUnanswered={showUnanswered} />

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