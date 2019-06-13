import React, { Component } from 'react';
import {connect} from 'react-redux'; 
// import store from '../store';
// import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
// import firebase from 'firebase';  this will need to be connected to the database eventually. 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import firebase from 'firebase';

const db = firebase.firestore();

class TaskForm extends Component {


    constructor(){

        super()
        this.state = {
            creatorId:'',
            creatorName:'',
            description:'',
            perferredDate:'',
            subject:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render(){

        return(
          <div>
          <br/>
            <Typography> 
                Create Task
            </Typography>
                <form onSubmit={this.handleSubmit}> 
            
                <TextField  
                name='creatorName'
                value={this.state.creatorName}
                onChange={this.handleChange}
                id="outlined-full-width"
                label="First Name"
                style={{ margin: '10px 0px 0px 30px' }}
                placeholder="first name"
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                shrink: true,
                }}
                />
                <TextField  
                name='subject'
                value={this.state.subject}
                onChange={this.handleChange}
                id="outlined-full-width"
                label="Subject"
                style={{ margin: '10px 0px 0px 30px' }}
                placeholder="Subject"
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                shrink: true,
                }}
                />
                <TextField  
                name='description'
                value={this.state.description}
                onChange={this.handleChange}
                id="outlined-multiline-flexible"
                label="task description"
                style={{ margin: '10px 0px 0px 30px' }}
                placeholder="task description"
                margin="normal"
                variant="outlined"
                multiline
                rowsMax="4"
                InputLabelProps={{
                shrink: true,
                }}
                />
                <Button type='submit' variant="outlined" size="medium" color="primary">
                    Submit
                </Button>
                </form>
          </div>
        )
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
      
        db.collection('tasks').doc()
        .set({
            creatorName:this.state.creatorName,
            description:this.state.description,
            subject:this.state.subject
        })
        .then( () => 
        this.setState({
            creatorId:'',
            creatorName:'',
            description:'',
            perferredDate:'',
            subject:''
        }))
    }


}
export default connect(null)(TaskForm)