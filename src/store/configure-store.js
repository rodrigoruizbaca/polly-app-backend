import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {postReducer, loading, processing} from '../reducers/post-reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
    posts: postReducer,
    loading,
    processing 
}),
    composeEnhancers(applyMiddleware(thunk))
);

export default () => {
    return store;
};