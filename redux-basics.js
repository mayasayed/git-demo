const redux = require('redux');
const createStore = redux.createStore;
 
const initiaState={
    counter:0
}
//Reducer
// fisrt create reducer 
//(pure fonction take previous state and an action then return the next state  *use sauf pure function ) 
const RootReducer = (state =initiaState, action) => {
    if(action.type==='INC_COUNTER'){
        return {...state , counter:state.counter +1 };
    }
    if(action.type==='ADD_COUNTER'){
        return {...state , counter:state.counter + action.value };
    }
    return state;
}
// store 
// then create the store 
const store = createStore(RootReducer); // use reducer to creat store 
//console.log(store.getState());

// Subscription
store.subscribe(()=>{
    console.log('[subscription]',store.getState())
   });


// Dispatching Action 
store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_COUNTER',value:10});
//console.log(store.getState());



