import React, {Component} from "react";
import PropTypes from 'prop-types'
import {toggleTodo} from "../actions";
import {connect} from "react-redux";

class Todo extends Component {
    render() {
        const {completed, text, id} = this.props;
        return (
            <li
                className={completed ? 'completed' : ''}
            >
                <div className="view">
                    <input className="toggle" type="checkbox"
                           onClick={() => this.props.toggleTodo({id})}/>
                    <label>{text}</label>
                </div>
            </li>
        )
    }
}

Todo.propTypes = {
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

const mapDispatchToProps = {
    toggleTodo
};

export default connect(
    null,
    mapDispatchToProps
)(Todo)
