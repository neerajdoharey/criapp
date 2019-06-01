import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'

class Navigation extends Component {
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  
  static contextTypes = {
    router: PropTypes.object
  }
  
  handleClick = (event) => {
    event.preventDefault();
    let value = this.refs.name.value;
    console.log(value)
    this.context.router.history.push(`/searchplayers/${value}`)
  }

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">Cricket App</li>
            <li>
              <ul className="menu vertical">
              </ul>
            </li>
            <li><NavLink to="/">Matchs</NavLink></li>
            <li><NavLink to="/player_stat/35320">Player Stats</NavLink></li>
            <li><NavLink to="/score">Live Score</NavLink></li>
            <li></li>
          </ul>
        </div>
        <div className="top-bar-right"> 
          <form onSubmit={this.handleClick}>    
            <ul className="menu">
              <li><input type="search" placeholder="Search" ref="name" /></li>
              <li><button type="submit" className="button">Search</button></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default Navigation;
