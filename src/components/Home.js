import React, { useState } from 'react';
import { Button, Modal, Form } from 'bootstrap-4-react';
import QuestionsSummaryList from './QuestionsSummary';

const Home = (props) => {

  const [title, setTitle] = useState(0);
  const [case1, setCase1] = useState(1);
  const [case2, setCase2] = useState(2);

  // const {actions} = this.props;

  console.log(props);

  const handleTitleKeyUp = (e) => {
    setTitle(e.target.value);
  }

  const handleCase1KeyUp = (e) => {
    setCase1(e.target.value);
  }

  const handleCase2KeyUp = (e) => {
    setCase2(e.target.value);
  }

  const saveQuestion = () => {
    props.addQuestion(new Date().getTime(), title, case1, case2, props.users.activeuser)
  }

  return (
    <div className="p-3">
      <div className="d-flex pb-4 justify-content-between">
        <Button primary data-toggle="modal" data-target="#exampleModal">New Question</Button>
        <Form>
          <Form.Group>
            <div className="d-flex flex-row-reverse">
              <Form.Check className="pr-4">
                <Form.CheckInput type="checkbox" id="unansweredcheck" />
                <Form.CheckLabel htmlFor="unansweredcheck">Unanswered</Form.CheckLabel>
              </Form.Check>
              <Form.Check className="pr-4">
                <Form.CheckInput type="checkbox" id="answeredcheck" />
                <Form.CheckLabel htmlFor="answeredcheck">Answered</Form.CheckLabel>
              </Form.Check>
            </div>
          </Form.Group>
        </Form>
      </div>

      <QuestionsSummaryList />

      {/* Modal */}
      <Modal id="exampleModal" fade>
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
                <label for="titleInput" style={{width: '100%', textAlign: 'center'}}>Title</label>
                <input onKeyUp={handleTitleKeyUp} type="text" className="form-control" id="titleInput" placeholder="Enter title"></input>
              </div>
              <h2 style={{textAlign: 'center'}}>Would you rather ...</h2>
              <div className="form-group">
                <input onKeyUp={handleCase1KeyUp} type="text" className="form-control" id="case1Input" placeholder="Case 1" />
              </div>            
              <div className="form-group">
                <label for="case1Input" style={{textAlign: 'center', width: '100%'}}>OR</label>
                <input onKeyUp={handleCase2KeyUp} type="text" className="form-control" id="case2Input" placeholder="Case 2" />
              </div> 
              <h2 style={{textAlign: 'center', margin: '0 auto', width: '40px', height: '40px', borderRadius: '40px', background: 'black', color: 'white'}}>?</h2>

            </Modal.Body>
            <Modal.Footer>
              <Button secondary data-dismiss="modal">Close</Button>
              <Button primary onClick={saveQuestion}>Save Question</Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Dialog>
      </Modal>
    </div>
  )
};
  
export default Home;