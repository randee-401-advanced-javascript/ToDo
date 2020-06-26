import React, { useState, useEffect } from 'react';

function ToDoForm(props){
  const [task, setTask] = useState('Task Title');
  const [description, setDescription] = useState('Description of task');
  const [assignment, setAssignment] = useState('Husband');
  const [status, setStatus] = useState('not even started');
  const [difficulty, setDifficulty] = useState(5);
}