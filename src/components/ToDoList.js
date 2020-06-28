import React from 'react';

import Item from './ToDoItem';

function ToDoList(props){
  let items = [];

  for (let i = 0; i < props.tasks.length; i++ ) items.push(<Item
    key={i}
    index={i}
    data={props.tasks[i]}
    modifyTask={props.modifyTask}
    />, );
  return(
    <div>
      <h1>Tasks</h1>
      {items}
    </div>
  );
}



export default ToDoList;