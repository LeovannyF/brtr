import {createStore, applyMiddleware, combineReducers} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {firebaseKey} from './APIkeys';
import * as firebase from 'firebase';
import 'firebase/firestore';

let config = {
  apiKey: firebaseKey,
  authDomain: "brtr-6f18a.firebaseapp.com",
  databaseURL: "https://brtr-6f18a.firebaseio.com",
  projectId: "brtr-6f18a",
  storageBucket: "brtr-6f18a.appspot.com",
  messagingSenderId: "692321325646"
};

firebase.initializeApp(config);

// const app = firebase.app();
const db = firebase.firestore();

const myUsers = db.collection('users')
const myTasks = db.collection('tasks')

//----------------------action types-----------------------------------

const LOAD_USERS = 'LOAD_USERS';
const LOAD_TASKS = 'LOAD_TASKS';
const LOGGEDIN_USER = 'LOGGEDIN_USER'


//----------------------action creators--------------------------------

const _loadUsers = (userList) => {
  return {
    userList,
    type: LOAD_USERS
  }
}

const _loadTasks = (taskList) => {
  return {
    taskList,
    type: LOAD_TASKS
  }
}

const _LoggedInUser = (user) => {
  return {
    user,
    type: LOGGEDIN_USER
  }
}

const _clearUser = (user) => {
  return {
    user,
    type: LOGGEDIN_USER
  }
}

//-----------------------thunk creators--------------------------------
const loadUsers = () => {
  return(dispatch) => {
    let userArr = [];
    myUsers.get()
      .then(users => {
        users.forEach(doc => {
          let data = doc.data()
          userArr.push(data);
        })
        return userArr
      })
      .then(arr => dispatch(_loadUsers(arr)));
  }
}

const loadTasks = () => {
  return(dispatch) => {
    let taskArr = [];
     myTasks.get() // myTasks has already been declared as we pull the collection from the Database
      .then(tasks => {
        tasks.forEach(doc => {
          let data = doc.data()
          taskArr.push(data)
        })
        return taskArr
      })
      .then(arr => dispatch(_loadTasks(arr)));
  }
}

const getUser = (user) => {
  return (dispatch) => {
    const foundUser = [];
    const query = myUsers.where('emailAddress', '==', user.email) 
    query.get()
    .then(found => {
      found.forEach(doc => {
        let data = doc.data();
        foundUser.push(data)
      })
      return foundUser
    })
    .then(currentUser => dispatch(_LoggedInUser(currentUser[0])))
  }
}

const clearUser = () => {
  let clearState = {};
  return (dispatch) => {
    dispatch(_clearUser(clearState))
  }
}

//---------------store reducers------------------

const UserReducer = (state = [], action) => {

  switch(action.type) {
    case LOAD_USERS:
    state = action.userList
    break;

    default:
    // do nothing
  }
  return state;
}

const TaskReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_TASKS:
    state = action.taskList;
    break;

    default:
    // do nothing
  }
  return state;
}

const LoggedIn =(state = {}, action) => {
  switch(action.type){
    case LOGGEDIN_USER:
    state = action.user
    break;

    default:
    // do nothing
  }
  return state;
}


//---------------combined reducers---------------
const reducer = combineReducers({
  User: UserReducer,
  Task: TaskReducer,
  LoggedIn: LoggedIn
});

//---------------store---------------------------

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;

export{loadUsers, loadTasks, getUser, clearUser}
