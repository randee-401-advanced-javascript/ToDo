import React, { useEffect } from 'react';

import Container from 'react-bootstrap/Container'

import Form from './ToDoForm';
import List from './ToDoList';

import useFetch from '../hooks/useFetch'

const superagent = require('superagent');



function ToDo(props) {

  const { setRequest, response, get } = useFetch({
    url: 'https://todo-server-401n16.herokuapp.com/api/v1/todo'
  })


  async function addTask(taskDetails) {
    let newBody = {
      text: taskDetails.text || 'blah',
      assignee: taskDetails.assignee || 'Anyone other than myself',
      difficulty: taskDetails.difficulty || 3,
      complete: taskDetails.status || false
    }
    
    await setRequest ({
      url: 'https://todo-server-401n16.herokuapp.com/api/v1/todo',
      method: 'POST',
      body: newBody,
      runGet: 'https://todo-server-401n16.herokuapp.com/api/v1/todo'
    })
  }

  async function modifyTask(idx, updatedTask) {
    await setRequest({
      url: 'https://todo-server-401n16.herokuapp.com/api/v1/todo/' +
      response[idx]._id,
      method: 'PUT',
      body: updatedTask,
      runGet: 'https://todo-server-401n16.herokuapp.com/api/v1/todo',
    });
  }

  async function getTask() {
    try {
    const url = 'https://todo-server-401n16.herokuapp.com/api/v1/todo'
    const res  = await superagent.get(url);
    return res.body;
    } catch(e){console.error(e)}
  
  }

  async function deleteTask(idx){
    await setRequest({
      url: 'https://todo-server-401n16.herokuapp.com/api/v1/todo/' +
      response[idx]._id,
      method: 'DELETE',
      runGet: 'https://todo-server-401n16.herokuapp.com/api/v1/todo',
    })
  }

  return (
    <Container>
      <Form addTask={addTask} />
      <List 
        tasks={getTask} 
        modifyTask={modifyTask}
        deleteTask={deleteTask}
       />
    </Container>
  )
}

export default ToDo;