import React, { Component } from 'react';
import {connect} from 'react-redux';
import store, {getUser, clearUser} from '../store';
// import PropTypes from 'prop-types';
// import{Link, Redirect} from 'react-router-dom';
// import classNames from 'classnames';
// import {withStyles} from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
// import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Profile from './Profile';
import firebase from 'firebase';

//firebase recommends not using the uid proved to authenticate a user. I will be authenticating with email for now.


const auth = firebase.auth();
const db = firebase.firestore();

firebase.auth().onAuthStateChanged(function(user) {
  if(user) {
    store.dispatch(getUser(user))
  } else {

  }
})

class SignUpUser extends Component {
  constructor(){
    super()
    this.state = {  
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      loggedInSuccessfull:false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render(){
    return(
      <div>
      {this.state.loggedInSuccessfull === false ? (

        <div style={{flexWrap:'nowrap', textAlign:'center' }}>
      <div> 
       <img src="./Images/brtr-logo.png" alt="brtr logo"></img> style={{height:'250px', margin: '10px 0px 0px 30px' }}/>
      </div>
      <br/>
        <Typography style={{ display: 'inline', margin: '10px 10px 10px 35px'}} variant="h5" component="h3">
          Sign Up
        </Typography>
      <form    onSubmit={this.handleSubmit}>
      <TextField
          name='firstName'
          value={this.state.firstName}
          onChange={this.handleChange}
         id="outlined-full-width"
         label="first name"
         style={{ margin: '10px 0px 0px 30px' }}
         placeholder="first name"
         margin="normal"
         variant="outlined"
         InputLabelProps={{
           shrink: true,
         }}
       />

       <br/>

       <TextField
          name='lastName'
          value={this.state.lastName}
          onChange={this.handleChange}
          id="outlined-full-width"
          label="last name"
          style={{ margin: '10px 0px 0px 30px' }}
          placeholder="last name"
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br />

        <TextField
           name='email'
           value={this.state.email}
           onChange={this.handleChange}
           id="outlined-full-width"
           label="e-mail"
           style={{ margin: '10px 0px 0px 30px' }}
           placeholder="E-mail"
           margin="normal"
           variant="outlined"
           InputLabelProps={{
             shrink: true,
           }}
         />
         <br/>

         <TextField
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
            id="outlined-full-width"
            label="password"
            style={{ margin: '10px 0px 0px 30px' }}
            placeholder="Password"
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br/>
          <Button type='submit' style={{ display: 'inline', margin: '10px 10px 10px 35px'}}  variant="contained">Sign Up</Button>
      </form>
      </div>

      ) : (
          <Profile />
        )
      }
      </div>
    )
  }
  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(newUser => {  
      let userEmail = this.state.email.toLowerCase();
      db.collection('users')
      .doc(newUser.user.uid)
      .set({
        firstName:this.state.firstName,
        lastName:this.state.lastName,
        services:[],
        emailAddress:userEmail,
      })
      }
    )
    .then( () => 
      this.setState({
          firstName:'',
          lastName:'',
          email:'',
          password:'',
          loggedInSuccessfull:true
        })
    )
  }
}

const mapStateToProps = ({LoggedIn}) => {
  return {
    LoggedIn
  }
}

export default connect(mapStateToProps)(SignUpUser)
