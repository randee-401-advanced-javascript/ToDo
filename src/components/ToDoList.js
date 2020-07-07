import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';

import Item from './ToDoItem.js';

async function List(props) {
  
  let items = [];
  let allTheThings = await props.tasks();
  console.log('all the things', allTheThings)

  if (allTheThings) {
    for ( let i = 0; i < allTheThings.length; i++ ) {
      items.push(
        <Item 
          difficulty={allTheThings.difficulty}
          text={allTheThings.text}

          // item={props.tasks[i]} 
          // key={i} 
          // idx={i} 
          deleteTask= {props.deleteTask} 
          updateTask={props.updateTask}
          />
      );
    }
  }

  return (
    <CardColumns>
      { items }
    </CardColumns>
  )
}

export default List;