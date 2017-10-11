import React from 'react';
import {
    Route,
    Link
} from 'react-router-dom';

const Todo=({match})=>(
    <h3>Todo    {match.params.todoId}</h3>
);

const Todos=()=>(
    <div>
    <ul>
        <li><Link to='/todo/1'>Todo 1</Link></li>
        <li><Link to='/todo/2'>Todo 2</Link></li>
        <li><Link to='/todo/3'>Todo 3</Link></li>
    </ul>
    <Route exact path='/todo/:todoId' component={Todo}/>
    </div>
);

export default Todos;