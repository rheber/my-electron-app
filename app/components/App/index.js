import React from 'react';
import {hot} from 'react-hot-loader';
import {Route, Switch} from 'react-router-dom';
import './style.css';

import Screen1 from 'components/Screen1';
import Screen2 from 'components/Screen2';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Screen1} />
        <Route path='/screen2' component={Screen2} />
        <Route render={() => (<div>Miss</div>)} />
      </Switch>
    );
  }
}

export default hot(module)(App);

