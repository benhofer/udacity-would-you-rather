import React from 'react';
import { Navbar, Nav, Button, Modal, Form, Collapse, Card } from 'bootstrap-4-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Home() {
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
              
            </Modal.Body>
            <Modal.Footer>
              <Button secondary data-dismiss="modal">Close</Button>
              <Button primary>Save Question</Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Dialog>
      </Modal>

  </div>
  )};
  