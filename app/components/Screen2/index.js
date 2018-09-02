import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Screen2 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Link to='/'>Prev</Link>
        <div>Counter: {this.props.counter}</div>
        <button onClick={this.props.incCounter}>+</button>
        <button onClick={this.props.decCounter}>-</button>
      </React.Fragment>
    );
  }
}

function mapState(state, ownProps) {
  return {
    counter: state.counter,
  };
}

function mapDispatch(dispatch, ownProps) {
  return {
    incCounter: () => {dispatch({type: 'INC_COUNTER'})},
    decCounter: () => {dispatch({type: 'DEC_COUNTER'})},
  };
}

export default connect(mapState, mapDispatch)(Screen2);
