import {createStore} from 'redux';

const INC_COUNTER = 'INC_COUNTER';
const DEC_COUNTER = 'DEC_COUNTER';

const initialState = {
  counter: 0,
};

function rootReducer(state, action) {
  if(action.type === INC_COUNTER) {
    return {
      counter: state.counter + 1,
    };
  }
  if(action.type === DEC_COUNTER) {
    return {
      counter: state.counter - 1,
    }
  }
  return state;
}

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
