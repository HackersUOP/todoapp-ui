import React from 'react';
import { NavLink } from 'react-router-dom';

const TodoListItem = (props) => {
    const { id, name, onDelete } = props;
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {name}
            <div>
            <NavLink
                className="btn btn-primary btn-sm"
                to={`/todos/${id}`}
            >
                <small>View</small>
            </NavLink>
            <button
                className="btn btn-danger btn-sm ml-3"
                onClick={() => {
                    // console.log('to be deleted', name, id);
                    onDelete(id);
                }}
            >
                <small>Delete</small>
            </button>
            </div>
        </li>
    )
}

export default TodoListItem;
