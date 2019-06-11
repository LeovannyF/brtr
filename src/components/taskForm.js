import React, { Component } from 'react';
import {connect} from 'react-redux'; 
// import store from '../store';
// import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
// import firebase from 'firebase';  this will need to be connected to the database eventually. 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



class TaskForm extends Component {


    constructor(){
        super()
        this.state = {
            creatorId:'',
            creatorName:'',
            discription:'',
            perferredDate:''
        }
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
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
                name='First Name'
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
                name='Subject'
                value={this.state.creatorName}
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
                name=' task description'
                value={this.state.discription}
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
                <Button variant="outlined" size="medium" color="primary">
                    Submit
                </Button>
                </form>

          </div>
        )
    }

}
export default connect(null)(TaskForm)