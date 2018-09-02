import React from 'react';
import {hot} from 'react-hot-loader';
import {Route} from 'react-router-dom';
import './style.css';

import Screen1 from 'components/Screen1';
import Screen2 from 'components/Screen2';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path='/' component={Screen1} />
        <Route path='/screen2' component={Screen2} />
      </React.Fragment>
    );
  }
}

export default hot(module)(App);

