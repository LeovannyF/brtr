import React, { Component } from "react";
import { connect } from "react-redux";
import taskForm from "./taskForm";
import sharedInstance from "jss";
import LandingPage from "./LandingPage";

class Profile extends Component {

  render() {
    const { firstName, lastName, emailAddress } = this.props.LoggedIn;
    return (
      <div>
          { emailAddress === undefined ? (
              <LandingPage />
          ) : (
            <div> 
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{emailAddress}</p>
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