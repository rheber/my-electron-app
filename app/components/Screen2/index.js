import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Screen2 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Link className='prev' to='/'>Prev</Link>
        <div className='counter'>Counter: {this.props.counter}</div>
        <Button className='inc' onClick={this.props.incCounter}>+</Button>
        <Button className='dec' onClick={this.props.decCounter}>-</Button>
        <Button className='async-inc' onClick={this.props.asyncIncCounter}>Async Increment</Button>
      </React.Fragment>
    );
  }
}

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function mapState(state, _ownProps) {
  return {
    counter: state.counter,
  };
}

function mapDispatch(dispatch, _ownProps) {
  return {
    incCounter: () => {dispatch({type: 'INC_COUNTER'});},
    decCounter: () => {dispatch({type: 'DEC_COUNTER'});},
    asyncIncCounter: async () => {
      await timeout(2000);
      dispatch({type: 'INC_COUNTER'});
    },
  };
}

export default connect(mapState, mapDispatch)(Screen2);
