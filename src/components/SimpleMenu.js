import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';

class SimpleMenu extends React.Component {
  constructor() {
    super()
    this.state = {
        anchorEl: null,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick(event){
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose() {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          style={{ color: 'white' }}
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
        Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}><Link to='/home' style={{ textDecoration: 'none', color: 'black' }}> Home </Link></MenuItem>
          <MenuItem onClick={this.handleClose}>Users</MenuItem>
          <MenuItem onClick={this.handleClose}>Tasks</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;
