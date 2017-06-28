import React, { Component } from 'react';
import MenuExpandingCircle from './components/MenuExpandingCircle.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuExpandingCircle />
        <div className="page">
          <section className="content-section">
            <h1>Lacus. In id velit.</h1>
            <p>
              Ultricies dui. Cras gravida rutrum massa. Donec accumsan
              mattis turpis. Quisque sem. Quisque elementum sapien iaculis augue.
              In dui sem, congue sit amet, feugiat quis, lobortis at, eros.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum
              vehicula purus. Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus.
            </p>

            <p>
              Aenean risus dui, volutpat non, posuere vitae, sollicitudin in, urna. Nam eget
              eros a enim pulvinar rhoncus. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Nulla facilisis massa ut massa. Sed
              nisi purus, malesuada eu, porta vulputate, suscipit auctor, nunc. Vestibulum
              convallis, augue eu luctus malesuada, mi.
            </p>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
