import React from 'react';
import { Motion, spring } from 'react-motion';

const springConfig = {stiffness: 400, damping: 38};

class DemoOne extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isPressed: false,
      unlocked: false,
      pageX: 0,
      deltaX: 0
    };
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
  }

  handleMouseDown (e) {
    e.preventDefault();
    this.setState({isPressed: true, pageX: e.pageX});
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', () => {
      window.removeEventListener('mousemove', this.handleMouseMove)
      this.setState({isPressed: false, pageX: 0, deltaX: this.state.unlocked ? this.state.deltaX : 0});
    });
  }

  handleMouseMove ({pageX}) {
    if (this.state.unlocked) return
    let offset = pageX - this.state.pageX;
    let deltaX;
    if (offset > 340) {
      deltaX = 360;
      this.unlock();
    } else {
      deltaX = offset;
    }
    this.setState({deltaX})
  }

  unlock () {
    console.log('unlocked');
    this.setState({unlocked: true});
    window.removeEventListener('mousemove', this.handleMouseMove);
  }

  render () {
    return (
      <div>
        <Motion style={{x: spring(this.state.deltaX, springConfig)}}>
          {({x}) =>
            <div style={{
              backgroundColor: 'gray',
              left: '50px',
              top: '50px',
              position: 'absolute',
              padding: '3px',
              borderRadius: '8px',
              width: '400px'
            }}>
              <div
                onMouseDown={this.handleMouseDown}
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: this.state.unlocked ? 'yellow' : 'lightblue',
                  borderRadius: '4px',
                  position: 'relative',
                  left: `${x}px`
              }}>
              </div>
            </div>}
        </Motion>

        {this.state.unlocked &&
          <div
            style={{ transition: 'all 0.3s ease', opacity: 0.8, position: 'absolute', backgroundColor: 'aqua', top: '0px', left: '0px', bottom: '0px', right: '0px' }}>
            Unlocked!
          </div>}
      </div>
    )
  }
}

export default DemoOne
