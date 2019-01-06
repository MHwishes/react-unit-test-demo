import React from 'react'
import Footer from './Footer'
import AddTodo from './AddTodo'
import VisibleTodoList from './TodoList'
import '../App.css'

const App = () => (
    <div className="todoapp">
        <h1 className="title">Todos</h1>
        <div className="main">
            <AddTodo/>
            <VisibleTodoList/>
        </div>
        <Footer/>
    </div>
);

export default App
