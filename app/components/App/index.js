import React from 'react';
import {hot} from 'react-hot-loader';
import './style.css';

class App extends React.Component {
  render() {
    return (
      <p>Ahoy!</p>
    );
  }
}

export default hot(module)(App);

