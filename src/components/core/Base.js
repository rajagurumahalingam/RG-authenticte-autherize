import React from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { configureFakeBackend } from '../../_helpers/fakebackend';
import { userActions } from '../../actions/user.action';

// setup fake backend
configureFakeBackend();

const Base = (props) => {
  
  const logout = () => {
    props.logout();
  }

  
  return(
    <>
      <div className="header-main">
      <div className="bg-dark text-white text-center headersec">
           <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <h1 className="navbar-brand"><Link to="/Home">Logo</Link></h1>
                </div>
                <ul className="nav navbar-nav">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/register">Register</Link></li>
                  { props.loggedIn && <li onClick={logout}>Logout</li>}
                </ul> 
              </div>
            </nav>
         </div>
      <div className="bg-dark text-white p-4 mainsection">{props.children}</div>
      </div>
    <footer className="footer bg-success mt-auto">
      <div className="container-fluid text-white text-center py-3">
        <div className="float-left"><h4>If you got any questions, feel free to reach out!</h4></div>
        <button className="btn btn-warning btn-md">Contact Us</button>
      </div>
    </footer>
    </>
  )
}

const mapSateToProps = (state) => {
  return{
    loggedIn : state.authentication.loggedIn
  }
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout
};

export default connect(mapSateToProps, actionCreators)(Base);