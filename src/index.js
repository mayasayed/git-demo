import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , combineReducers,applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import resultReducer from './store/reducers/result';
import counterReducer from './store/reducers/counter';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';

const rootReducer =combineReducers({
    ctr:counterReducer,
    res:resultReducer
});

// simple middleware: 
const logger=store=>{
    return next=>{
        return action =>{
            console.log('[MiddleWare] Dispatching',action);
            const result =next(action);
            console.log('[middleWare] next state',store.getState());
            return result;
        }
        
    }
}
// to use redux devtools  ( we need to import compose from the redux)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(logger,thunk)));
// if we don't have a middlware (basic): 
//const store = createStore(reducer,+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
