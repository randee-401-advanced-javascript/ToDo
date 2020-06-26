import React, { useState } from 'react';

function ToDoForm(props){
  const [task, setTask] = useState('Task Title');
  const [description, setDescription] = useState('Description of task');
  const [assignment, setAssignment] = useState('Husband');
  const [status, setStatus] = useState(false);
  const [difficulty, setDifficulty] = useState(5);

  function updateComplete(e){ 
    if(false) setStatus(true)
    if(true) setStatus(false)
  }

  return (
    <div>
      <label>Task:</label>
      <input type="text" onChange={ (e) => { setTask(e.target.value)}} value={task} />
      <label>Description</label>
      <input type="text" onChange={ (e) => { setDescription(e.target.value)}} value={description} />
      <label>Assignment</label>
      <input type="text" onChange={ (e) => { setAssignment(e.target.value)}} value={assignment} />
      <label>Challenge Level</label>
      <input type="number" min="1" max="5" value={difficulty} onChange={ (e) => {setDifficulty(e.target.value)}}  />
      <label>Completed?</label>
      <input type="radio" onChange={ updateComplete } />
    </div>
  )

}

export default ToDoForm;