import React, { Component } from 'react';
// import {render} from 'react-dom';
import {connect} from 'react-redux';
import { Route, HashRouter} from 'react-router-dom'; //Switch was not being used, removed it
import store, {loadUsers, loadTasks} from '../store'; // getUser was here, I thought I was using it for something, but I cannot remember what it was for
import NavBar from './NavBar';
import LoginUser from './LoginUser';
import HomePage from './HomePage';
import SignUpUser from './SignUpUser';
import LandingPage from './LandingPage';
import Profile from './Profile';
import Tasks from './Tasks';
import firebase from 'firebase';


const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

class App extends Component {

  componentDidMount() {
    store.dispatch(loadUsers());
    store.dispatch(loadTasks());
  }

  render() {
    return(
      <HashRouter>
        <div>
        <div id='navbar'>
          <Route path="/" component={NavBar}/>
        </div>
        <div>
          <Route exact path='/login' component={LoginUser}/>
          <Route exact path ='/home' component={HomePage}/>
          <Route exact path ='/signup' component={SignUpUser}/>
          <Route exact path ='/profile' component={Profile}/>
          <Route exact path ='/testRoute' component={LandingPage}/>
          <Route exact path ='/tasks' component={Tasks}/>
        </div>
        </div>
      </HashRouter>
    )
  }
}

const mapStateToProps = ({User, Task, LoggedIn}) => {
  return {
    User,
    Task,
    LoggedIn
  }
}

export default connect(mapStateToProps)(App)
