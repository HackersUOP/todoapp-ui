import Axios from 'axios';
import React, { Component } from 'react';
import NewTodo from './NewTodo';
import TodoListItem from './TodoListItem';

// {
//     name: 'My first todo item',
//     description: 'This is my first todo item description',
//     completed: false,
// }

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    componentDidMount(){
        // console.log('mounted');
        Axios.get('http://localhost:5000/api/todos').then((response) => {
            // console.log('GET res',response);
            this.setState({
                todos: response.data
            });
        }).catch((error) => {
            console.log(error);
        })
    }

    createHandler = (data) => {
        const {name} = data;
        if(name !== ''){
            const newTodo = {
                name: data.name,
                description: 'default',
                completed: false
            };
            Axios.post('http://localhost:5000/api/todos', newTodo).then((response) => {
                // console.log('POST res:', response);
                if(response.status === 200){
                    this.setState({
                        todos: [
                            ...this.state.todos,
                            newTodo
                        ]
                    });
                }
            })
        }
    }

    deleteHandler = (id) => {
        if(id !== ''){
            Axios.delete('http://localhost:5000/api/todos/'+id,).then((response) => {
                // console.log('POST res:', response);
                if(response.status === 200){
                    const prevData = this.state.todos;
                    var newData = [];
                    prevData.forEach((item) => {
                        if(id !== item._id){
                            newData.push(item);
                        }
                    });
                    this.setState({
                        todos: [
                            ...newData
                        ]
                    });
                }
            })
        }
    }

    render() {
        return (
            <div className="container mt-3">
                <h1>My Todos</h1>
                <NewTodo onSubmit={this.createHandler.bind(this)} />
                <div className="mt-3">
                    <ul className="list-group">
                        {this.state.todos.map((todo, index) => {
                            return (
                                <TodoListItem key={index} id={todo._id} name={todo.name} completed={todo.completed} onDelete={this.deleteHandler} />
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    };
}

export default Todos;
