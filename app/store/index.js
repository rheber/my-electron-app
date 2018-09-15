import {createBrowserHistory} from 'history';
import {applyMiddleware, compose, createStore} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router';

const INC_COUNTER = 'INC_COUNTER';
const DEC_COUNTER = 'DEC_COUNTER';

const initialState = {
  counter: 0,
};

const history = createBrowserHistory();
export {history};

function rootReducer(state, action) {
  if(action.type === INC_COUNTER) {
    return {
      counter: state.counter + 1,
    };
  }
  if(action.type === DEC_COUNTER) {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
}

const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  middleware(applyMiddleware(routerMiddleware(history)))
);

export default store;
