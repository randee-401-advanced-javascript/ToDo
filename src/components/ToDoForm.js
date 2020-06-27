import React, { useState } from 'react';

function ToDoForm(props){
  const [title, setTitle] = useState('Task Title');
  const [description, setDescription] = useState('Description of task');
  const [assignment, setAssignment] = useState('Husband');
  const [status, setStatus] = useState(false);
  const [difficulty, setDifficulty] = useState(5);

  function updateComplete(e){ 
    if(e.target === false) setStatus(true)
    if(e.target === true) setStatus(false)
  }

  // function createList(){
  //   let task = {
  //     title,
  //     description,
  //     assignment,
  //     status,
  //     difficulty
  //   }

  //   props.updateList([...props.currentList, task ])
  // }

  return (
    <div>
      <label>Task:</label>
      <input type="text" onChange={ (e) => { setTitle(e.target.value)}} value={title} />
      <label>Description</label>
      <input type="text" onChange={ (e) => { setDescription(e.target.value)}} value={description} />
      <label>Assignment</label>
      <input type="text" onChange={ (e) => { setAssignment(e.target.value)}} value={assignment} />
      <label>Challenge Level</label>
      <input type="number" min="1" max="5" value={difficulty} onChange={ (e) => {setDifficulty(e.target.value)}}  />
      <label>Completed?</label>
      <input type="radio" onChange={ updateComplete } />
      {/* <button type="submit" onClick={ createList }>Ready to change your world? Click here.</button> */}
    </div>
  )

}

export default ToDoForm;