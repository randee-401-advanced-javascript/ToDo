import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import useForm from '../hooks/useForm'

function ToDoForm(props) {

  const lenaAddTask = (e) => {
    e.preventDefault();
    let data = {
      text: e.target.text.value, 
      assignee: e.target.assignee.value, 
      difficulty: e.target.difficulty.value, 
      complete: e.target.status.value  
    }
    props.addTask(data)
  }


  const [update, submit, data] = useForm(props.addTask, {});
  // console.log('TODOFORM', update, submit, data)


  return (

    <Form onSubmit={lenaAddTask}>
      <Form.Group controlId="todo-description">
        <Form.Label>What is exactly that you need to do? </Form.Label>
        <Form.Control
          as='textarea'
          rows='3'
          name="text"
          onChange={(e) => {
            console.log('TEXT', e.target.value);
            update('text', e.target.value)
          }}
        />
      </Form.Group>

      <Form.Group controlId="todo-assignee">
        <Form.Label>Task Owner</Form.Label>
        <Form.Control
          type="text"
          placeholder="'Husband' should always be the default here"
          name="assignee"
          onChange={(e) => {
            console.log('ASSIGNEE', e.target.value);
            update('assignee', e.target.value)
          }}
        />
      </Form.Group>

      <Form.Group controlId="todo-difficulty">
        <Form.Label>Challenge Level</Form.Label>
        <Form.Control
          type="range"
          min={0}
          max={5}
          step={.5}
          name="difficulty"
          onChange={(e) => {
            // console.log('DIFFICULTY', e.target.value);
            update('difficulty', parseInt(e.target.value))
          }}
        />
      </Form.Group>

      <Form.Group controlId="todo-status">
        <Form.Check
          onChange={(e) => {
            // console.log('STATUS', e.target.value);
            update('status', e.target.checked);
          }}
          type='switch'
          id='status-switch'
          name="status"
          label={data.status ? 'complete' : 'incomplete'}
        />
      </Form.Group>


      <Button variant="primary" type="submit">
        Add Yo' Task
      </Button>
    </Form>

  )

}

export default ToDoForm;