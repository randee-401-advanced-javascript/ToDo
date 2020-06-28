import React from 'react';
import Form from 'react-bootstrap/Form'

function ToDoItem(props) {
  return (
    <div>
      <p>{props.data.title}</p>
      <p>{props.data.description}</p>
      <p>{props.data.assignment}</p>
      <p>{props.data.difficulty}</p>

      <Form.Group controlId="status">
        <Form.Check 
        label='Completed?' 
        type="switch" 
        value={false}
        onChange={() => {
          let newTask = { ... props.data }
          newTask.status = true ? false : true;
          props.modifyTask(props.indx, newTask);
        }}
        id={'status-switch-' + props.indx}
        label={props.data.status}
        />
      </Form.Group>

    </div>
  )
}

export default ToDoItem;