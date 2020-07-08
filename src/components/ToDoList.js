import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import Pagination from './Pagination';

function ToDoList(props) {
    let items = [];

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(2);




    if (props.tasks)

        for (let i = 0; i < props.tasks.length; i++)
            items.push(
                <ToDoItem
                    key={i}
                    indx={i}
                    data={props.tasks[i]}
                    deleteTask={props.deleteTask}
                    modifyTask={props.modifyTask}
                />,
            );
    let idxLastPost = currentPage * postsPerPage;
    let idxFirstPost = idxLastPost - postsPerPage;
    let currentPost = items.slice(idxFirstPost, idxLastPost);

    console.log('currentPost', currentPost)
    console.log('items', items)

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <h1>Tasks</h1>
            <Pagination postsPerPage={postsPerPage} totalPosts={items.length} paginate={paginate} />
            {currentPost}
        </div>
    );
}

export default ToDoList;