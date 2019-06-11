import React, { Component } from "react";
import { connect } from "react-redux";
import TaskForm from "./taskForm";
// import sharedInstance from "jss";
import LandingPage from "./LandingPage";
import CurrentUserTasks from "./CurrentUserTasks";

class Profile extends Component {

  render() {
    const { firstName, lastName, emailAddress } = this.props.LoggedIn;
    return (
      <div>
          { emailAddress === undefined ? (
              <LandingPage />
          ) : (
            <div>
              <div> 
              <p>{firstName}</p>
              <p>{lastName}</p>
              <p>{emailAddress}</p>
              </div> 
                <div>
                <TaskForm/>
                </div>
                  <div>
                  <CurrentUserTasks/>
                  </div>
            </div>
          )
          }
      </div>
    )
  }
}

const mapStateToProps = ({ LoggedIn }) => {
  return {
    LoggedIn
  };
};

export default connect(mapStateToProps)(Profile);