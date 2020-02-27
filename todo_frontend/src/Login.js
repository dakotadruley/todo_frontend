import React, { Component } from 'react'
import request from 'superagent';

export default class Login extends Component {
    state = {
        usernameSignIn: '',
        usernameSignUp: '',
        passwordSignIn: '',
        passwordSignUp: '',
    }

    handleSignUp = async () => {
        const signUp = await request.post(`https://agile-bastion-07503.herokuapp.com/api/auth/signup`, {
            email: this.state.usernameSignUp,
            password: this.state.passwordSignUp
        })

        localStorage.setItem('user', JSON.stringify(signUp.body));

        this.props.history.push('/');
    }

    handleSignIn = async () => {
        const signIn = await request.post(`https://agile-bastion-07503.herokuapp.com/api/auth/signin`, {
            email: this.state.usernameSignIn,
            password: this.state.passwordSignIn
        })

        localStorage.setItem('user', JSON.stringify(signIn.body));
        
        this.props.history.push('/');
    }

    render() {
        return (
            <div className='login'>
                <section className='signUp'>
                    <label className='username'>Username/Email:
                    <input value={ this.state.usernameSignUp} onChange={(e) => this.setState({ usernameSignUp: e.target.value})} />
                    </label>
                    <label className='password'>Password:
                    <input value={ this.state.passwordSignUp} onChange={(e) => this.setState({ passwordSignUp: e.target.value})} />
                    </label>

                    <button className='button' onClick={ this.handleSignUp }>Sign up</button>  
                </section>

                <section className='signIn'>
                    <label className='username'>Username/Email:
                    <input value={ this.state.usernameSignIn} onChange={(e) => this.setState({ usernameSignIn: e.target.value})} />
                    </label>
                    <label className='password'>Password:
                    <input value={ this.state.passwordSignIn} onChange={(e) => this.setState({ passwordSignIn: e.target.value})} />
                    </label>

                    <button className='button' onClick={this.handleSignIn}>Sign in</button>  
                </section>
            </div>
        )
    }
}