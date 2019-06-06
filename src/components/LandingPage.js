import React, { Component } from 'react';
// import store from '../store';
import {connect} from 'react-redux';
import LoginUser from './LoginUser'


class LandingPage extends Component {
    render() {
        return(
           <LoginUser/>
        )
    }
}

export default connect(null)(LandingPage) 