import React, { useState, useEffect }from 'react';
import Container from 'react-bootstrap/Container'

import Form from './ToDoForm';
import List from './ToDoList';


function ToDo(props) {
  let [tasks, setTasks] = useState([]);

  function addTask(taskDetails) {
    setTasks([...tasks, taskDetails])
  }

  function modifyTask(indx, updatedTask) {
    let currentTasks= [...tasks];
    currentTasks[indx] = updatedTask;
    setTasks(currentTasks);
  }

  useEffect(() => {
    let incomplete = 0;

    for(let i =0; i< tasks.length; i++) {
      if(tasks[i].status === false) incomplete ++;
    }
    
      if (incomplete) document.title = incomplete = ' incomplete tasks';
      else document.title = 'All tasks complete'
  }, [tasks]);

  return (
    <Container>
      <Form addTask={addTask} />
      <List tasks={tasks} modifyTask={modifyTask} />
    </Container>
  )
}

export default ToDo;