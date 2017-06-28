import React from 'react';
import './MenuExpandingCircle.css';
import MenuButton from './MenuButton.js';

class MenuExpandingCircle extends React.Component {
  constructor (props) {
    super(props);
    this.state = {isOpen: false};
  }

  toggleNav () {
    console.log('setting state');
    this.setState({isOpen: !this.state.isOpen});
  }

  render () {
    return (
      <div className={"menu " + (this.state.isOpen ? 'isOpen' : '')}>
        <MenuButton toggleNav={this.toggleNav.bind(this)}/>
        <div className="menu-box" />
        <div className="menu-items">
          <p>Home</p>
          <p>About</p>
          <p>Portfolio</p>
          <p>Contact</p>
        </div>
      </div>
    );
  }
}

export default MenuExpandingCircle
