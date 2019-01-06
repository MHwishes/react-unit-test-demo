import {connect} from 'react-redux'
import Todo from "./Todo";
import PropTypes from "prop-types";
import React, {Component} from "react";
import {visibilityFilters} from '../constant/constants'

class TodoList extends Component {

    render() {
        const {todos} = this.props;
        return (
            <ul className="todo-list">
                {todos.map(todo =>
                    <Todo
                        key={todo.id}
                        {...todo}
                    />
                )}
            </ul>
        )
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
};


const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case visibilityFilters.SHOW_ALL:
            return todos;
        case visibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case visibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

export default connect(
    mapStateToProps,
    null
)(TodoList)
