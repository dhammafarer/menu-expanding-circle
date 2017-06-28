import React from 'react';
import './MenuExpandingCircle.css';
import MenuButton from './MenuButton.js';

class MenuExpandingCircle extends React.Component {
  constructor (props) {
    super(props);
    this.state = {isOpen: false};
    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav () {
    console.log('setting state');
    this.setState({isOpen: !this.state.isOpen});
  }

  render () {
    return (
      <div className={"menu " + (this.state.isOpen ? 'isOpen' : '')}>
        <MenuButton toggleNav={this.toggleNav}/>
        <div className="menu-box" onClick={this.toggleNav}/>
        <div className="menu-items">
          <p><a href="#">Home</a></p>
          <p><a href="#">About</a></p>
          <p><a href="#">Portfolio</a></p>
          <p><a href="#">Contact</a></p>
        </div>
      </div>
    );
  }
}

export default MenuExpandingCircle
