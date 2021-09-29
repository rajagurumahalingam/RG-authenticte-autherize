import React, { Component } from 'react';
import Base from "./core/Base";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../actions/user.action';
import { userService } from '../_services/user.service';

class Login extends Component{
    constructor(props) {
        super(props);
        props.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();    
        this.setState({ submitted: true });
        const { username, password } = this.state;

        if (username && password) {
            userService.login(username, password);
            console.log("logginnnn!!");
        }
    }

    render(){
        //const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;

        return (
            <Base>
                <div className="col-md-6 col-md-offset-3">
                    <h2>Login</h2>
                    <form name="form" onSubmit={this.handleSubmit}>
                        <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                            {
                            submitted && !username &&
                                <div className="help-block">Username is required</div>
                            }
                        </div>

                        <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />

                            {submitted && !password &&
                                <div className="help-block">Password is required</div>
                            }
                        </div>

                        <div className="form-group">
                            <button className="btn btn-primary">Login</button>
                            
                            <Link to="/register" className="btn btn-link">Register</Link>
                        </div>
                    </form>
                </div>
            </Base>
        )
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

export default connect(mapState, actionCreators)(Login);