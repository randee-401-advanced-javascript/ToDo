import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header>
        {/* <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/tasks'>The List</Link>
            </li>
        </ul> */}

        <h1>To-Do Task Keeper</h1>
    </header>
);
}

export default Header;