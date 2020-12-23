import React, { Component } from 'react';

class NewTodo extends Component {
    constructor(props){
        super(props);
        this.state = {
            todo: {
                name: ''
            }
        };
    }

    onChangeHandler = (e) => {
        this.setState({
            todo: {
                name: e.target.value
            }
        });
    }

    render() {
        return (
            <>
            <div className="input-group my-4">
                <input type="text" className="form-control" placeholder="Add New Todo" aria-label="Add New Todo" aria-describedby="button-addon2" onChange={this.onChangeHandler.bind(this)} value={this.state.todo.name} />
                <div className="ml-3">
                    <button
                        className="btn btn-info"
                        type="button"
                        id="button-addon2"
                        onClick={() => {
                            this.props.onSubmit(this.state.todo);
                            this.setState({
                                todo: {
                                    name: ''
                                }
                            })
                        }}
                    >
                        Add
                    </button>
                </div>
            </div>
            </>
        );
    }
}

export default NewTodo;
