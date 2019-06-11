import React, {Component} from 'react';
import {connect} from 'react-redux';
// import card from '@material-ui/core/Card'; // will use cards to display the users individual tasks on there profile. 
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';


class CurrentUserTasks extends Component {
    render() {
        return(
            <div>
                <p>This is where all of the Users individual tasks will be rendered</p>
            </div>
        )
    }
}

export default connect()(CurrentUserTasks)
