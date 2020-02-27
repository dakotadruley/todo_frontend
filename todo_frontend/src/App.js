import React, { Component } from 'react';
import './App.css';
import TodoApp from './TodoApp.js';
import Login from './'
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

const isLoggedIn = () => JSON.parse(localStorage.getItem('user'));

export default class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route path='/' render={() =>
                        isLoggedIn()
                        ? <TodoApp />
                        : <Redirect to='login' />
                    }/>
                    <Route path='/login' component={Login} />
                </BrowserRouter>
            </div>
        );
    }
}


