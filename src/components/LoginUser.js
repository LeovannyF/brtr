import React, { Component } from 'react';
import {connect} from 'react-redux';
// import store from '../store';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
import {Redirect} from 'react-router';
// import {withRouter} from 'react-router-dom';
// import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import firebase from 'firebase';


const auth = firebase.auth();

class LoginUser extends Component {

  constructor() {
    super()
    this.state = {
      email:'',
      password:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const {emailAddress} = this.props.LoggedIn;
    return (
      <div> 
        {emailAddress === undefined ? (
           <div style={{flexWrap:'nowrap', textAlign:'center' }}> 
           <div> 
           <img src="./Images/brtr-logo.png" alt="brtr logo" style={{height:'250px', margin: '10px 0px 0px 30px' }}/>
           </div>
           <div style={{flexWrap:'nowrap', textAlign:'center' }}>
             <br/>
               <Typography  style={{ margin: '10px 0px 0px 30px'}} variant="h5" component="h3">
                 Sign In
               </Typography>
             <form onSubmit={this.handleSubmit}>
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
               <br />
               <Button type='submit' style={{ margin:'10px 32px' }} variant="contained"> Login </Button>
               <Button id='signup' style={{ display: 'inline'}}  variant="contained"><Link to='/signup'style={{ textDecoration: 'none', color:'black' }}> Sign Up </Link></Button>
               <Button id='logout'variant="contained" style={{ display: 'none' }}> Log Out</Button>
             </form>
             </div>
           </div>
          ) : (
            <Redirect to = '/profile'/> 
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
    event.preventDefault();
    const promise = auth.signInWithEmailAndPassword(this.state.email, this.state.password)
    promise.catch(e => console.log(e.message))

    this.setState({
      email:'',
      password:''
    })
  }
 }

 const mapStateToProps = ({LoggedIn}) => {
   return { 
     LoggedIn
   }
 }

export default connect(mapStateToProps)(LoginUser);
