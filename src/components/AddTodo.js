import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'
import '../App.css'

export class AddTodoView extends Component {
    handleClick = (e) => {
        if (e.keyCode === 13) {
            const node = e.target;
            const text = node.value && node.value.trim();
            text && this.props.addTodo({text});
            node.value = '';
        }
    };

    render() {
        return (
            <header className="header">
                <input
                    className="new-todo"
                    type="text"
                    onKeyUp={this.handleClick}
                    placeholder="input todo item"
                    ref='input'/>
            </header>
        )
    }
}


const mapDispatchToProps = {
    addTodo
};

export default connect(null, mapDispatchToProps)(AddTodoView)
