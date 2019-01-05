import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({onClick, completed, text}) => {
    return (
        <li
            className={completed ? 'completed' : ''}
        >
            <div className="view">
                <input className="toggle" type="checkbox" onClick={onClick}/>
                <label>{text}</label>
            </div>
        </li>
    )
};

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo
