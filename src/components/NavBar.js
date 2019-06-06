import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';
// import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import store, {clearUser} from '../store';
import firebase from 'firebase';

function handleLoggout(){
  store.dispatch(clearUser());
  firebase.auth().signOut();
}
 
// const styles = {
//   root: {
//     flexGrow: 1,
//   },
//   grow: {
//     flexGrow: 1,
//   },
//   menuButton:{
//     marginLeft: -12,
//     marginRight: 20,
//   },
// };

class Navbar extends Component {
  render() {

  const {emailAddress} = this.props.LoggedIn;

  return(
    <div>
      { emailAddress === undefined ? (
        <div> 
           <AppBar color='primary' position="static">
           <Toolbar>
             <Button><Link to='/profile' style={{textDecoration:'none', color:'white'}}>My Profile</Link> </Button>
             <Button> <Link to ='/tasks' style={{textDecoration: 'none', color:'white'}}>Tasks</Link> </Button>
             <Button> <Link to ='/services' style={{textDecoration: 'none', color:'white'}}>Services</Link> </Button>
             <Button> <Link to = '/login' style={{textDecoration: 'none', color:'white'}}> Log In </Link> </Button> 
           </Toolbar>
         </AppBar>
         </div>
      ) : (
        <div>  
        <AppBar color='primary' position="static">
            <Toolbar>
              <Button><Link to='/profile' style={{textDecoration:'none', color:'white'}}>My Profile</Link> </Button>
              <Button> <Link to ='/tasks' style={{textDecoration: 'none', color:'white'}}>Tasks</Link> </Button>
              <Button> <Link to ='/services' style={{textDecoration: 'none', color:'white'}}>Services</Link> </Button>
              <Button onClick={()=> handleLoggout()} style={{textDecoration: 'none', color:'white'}}> Log Out </Button>
            </Toolbar>
          </AppBar>
          </div>
      )
    } 
    </div>
  )
  }
}
const mapStateToProps = ({LoggedIn}) => {
  return {
    LoggedIn
  }
}
// ButtonAppBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default connect(mapStateToProps)(Navbar);
