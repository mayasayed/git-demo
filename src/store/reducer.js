import * as actionTypes from './actions';
const initialState = {
    counter: 0,
    results:[]
}

const reducer = (state = initialState, action) => {
    // if (action.type === 'INCREMENT') {
    //     return {
    //         counter: state.counter + 1
    //     }
    // }
    // if(action.type==='DECREMENT'){
    //     return {
    //         counter:state.counter -1
    //     }
    // }
    // if(action.type==='ADD'){
    //     return {
    //         counter: state.counter + action.value
    //     }
    // }
    // if(action.type==='SUBSTRUCT'){
    //     return {
    //         counter: state.counter - action.value
    //     }
    // }
      switch(action.type){
          case actionTypes.INCREMENT: return {...state,counter: state.counter + 1  } 
          case actionTypes.DECREMENT: return {...state,counter: state.counter -1 } ;
          case actionTypes.ADD: return {...state,counter: state.counter + action.value } ;
          case actionTypes.SUBTRACT: return {...state,counter: state.counter - action.value } ;
          case actionTypes.STORE_RESULT:return {...state,results:state.results.concat({id:new Date(), value:state.counter})}
          case actionTypes.DELETE_RESULT: const UpdateArray=state.results.filter(result=>result.id!==action.resultElId); return {...state,results:UpdateArray}
          default :return state;
      }
    //return state;
};

export default reducer;