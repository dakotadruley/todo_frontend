import React, { Component } from 'react'

export default class DeleteTodo extends Component {
    render() {
        return (
            <div className='deleteToDoDiv'>
                <button className='button' onClick={() => this.props.handleDELETEClick(this.props.todo) }>Delete</button>
            </div>
        )
    }
}