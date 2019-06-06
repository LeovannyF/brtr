import React, { Component } from 'react';
import {connect, Provider} from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LandingPage from './LandingPage';

class Tasks extends Component{

    render() {
        const { emailAddress } = this.props.LoggedIn
        return(
            <div>
            { emailAddress === undefined ? (
                <LandingPage />
            ) : (
                <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
                {this.props.Task.map((value, i )=> {
                    return <Card style={{margin:'10px 10px', width:'250px', height:'auto'}}key={i}> 
                        <CardContent>
                            <Typography > 
                                {value.description}
                            </Typography>
                        </CardContent>
                        <CardActions> 
                            <Button> message </Button>
                        </CardActions>
                    </Card>
                })}
                </div>
              )
            }   
          </div>  
        )
    }
}

const mapStateToProps = ({Task, LoggedIn}) => {
    return {
        Task,
        LoggedIn
    }
}

export default connect(mapStateToProps)(Tasks)