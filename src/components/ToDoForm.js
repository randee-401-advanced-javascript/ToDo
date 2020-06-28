import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

function ToDoForm(props) {
  const [title, setTitle] = useState(props.title || 'Task Title');
  const [description, setDescription] = useState(props.description ||'Description of task');
  const [assignment, setAssignment] = useState(props.assignment ||'Husband');
  const [status, setStatus] = useState(props.status || false);
  const [difficulty, setDifficulty] = useState(props.difficulty || 5);



  function createList() {
    props.addTask({
      title,
      description,
      assignment,
      status,
      difficulty
    })
  }
  return (

    <Form>
      <Form.Group controlId="taskTitle">
        <Form.Label>Task Title</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="title" 
        rows='1' 
        value={title} 
        onChange={(e) => {setTitle(e.target.value)}}
        />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>But what is the task, really? </Form.Label>
        <Form.Control 
        type="text" 
        placeholder="description"
        rows='3'
        value={description}
        onChange={(e) => {setDescription(e.target.value)}}
        />
      </Form.Group>

      <Form.Group controlId="assignment">
        <Form.Label>Task Owner</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Husband"
        rows='1'
        value={assignment}
        onChange={(e) => {setAssignment(e.target.value)}}
        />
      </Form.Group>

      <Form.Group controlId="difficulty">
        <Form.Label>Challenge Level</Form.Label>
        <Form.Control 
        type="range" 
        min={0}
        max={5}
        step={.5}
        value={difficulty}
        onChange={(e) => {setDifficulty(e.target.value)}}
        />
      </Form.Group>

      <Form.Group controlId="status">
        <Form.Check 
        label='Completed?' 
        type="switch" 
        value={false}
        onChange={() => {
          setStatus(status === true ? false : true)
        }}
        />
      </Form.Group>

    
      <Button variant="primary" type="button" onClick={createList}>
        Add Yo' Task
  </Button>
    </Form>

  )

}

export default ToDoForm;