import React from 'react';
import './MenuButton.css';

class MenuButton extends React.Component {
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
      <div className={'nav-toggle ' + (this.state.isOpen ? 'isOpen' : '')}
        onClick={this.toggleNav.bind(this)}>
         <div className='shape'/>
         <div className="lines open">
           <div className="line"/>
           <div className="line"/>
           <div className="line"/>
         </div>
         <div className="lines close">
           <div className="line" />
           <div className="line" />
         </div>
      </div>
    );
  }
}

export default MenuButton
