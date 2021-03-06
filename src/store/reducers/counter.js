import * as actionTypes from '../actions';
import {updateObject } from '../utility';
const initialState = {
    counter: 0,
    
}

// const reducer = (state = initialState, action) => {
//       switch(action.type){
//           case actionTypes.INCREMENT: return {...state,counter: state.counter + 1  } 
//           case actionTypes.DECREMENT: return {...state,counter: state.counter -1 } ;
//           case actionTypes.ADD: return {...state,counter: state.counter + action.value } ;
//           case actionTypes.SUBTRACT: return {...state,counter: state.counter - action.value } ;
//       }
//     return state;
//};
const reducer = (state = initialState, action) => {
      switch(action.type){
          case actionTypes.INCREMENT: return updateObject(state,{counter: state.counter + 1})
          case actionTypes.DECREMENT:return updateObject(state,{counter: state.counter -1}) ;
          case actionTypes.ADD:return updateObject(state,{counter: state.counter + action.value})
          case actionTypes.SUBTRACT: return updateObject(state,{counter: state.counter - action.value});
      }
    return state;
};
export default reducer;
// make  avery clean reducer