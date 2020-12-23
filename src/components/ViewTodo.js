import React, { Component } from 'react';
import Axios from 'axios';

class ViewTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: {}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        Axios.get('http://localhost:5000/api/todos/'+id).then((response) => {
            // console.log('GET res', response);
            if(response.status === 200){
                this.setState({
                    todo: response.data
                });
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    render() {
        const {name, description} = this.state.todo;
        return (
            <div className="container mt-3">
                <h1>View Todo</h1>
                <div className="mt-3">
                <div className="card border-primary mb-3">
                    <div className="card-header">Todo item</div>
                    {this.state.todo !== {} ?
                        <div className="card-body">
                            <h4 className="card-title">{name}</h4>
                            <p className="card-text">{description}</p>
                        </div>
                        :
                        <div className="card-body">
                            <h4 className="card-title">Not available</h4>
                        </div>

                    }
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewTodo;
