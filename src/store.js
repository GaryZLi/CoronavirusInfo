import { createStore, compose } from 'redux';
import rootReducer from './reducer';

const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// const composeEnhancers = compose;

const store = createStore(
    rootReducer,
    composeEnhancers(),
);

export default store;