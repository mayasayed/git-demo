import * as typeaction from './actions';
const saveResult=(res)=>{
    return {
        type:typeaction.STORE_RESULT,
        result: res
    };
}
// to handle asynchronous actions
export const storeResult =(res)=>{
    return (dispatch,getState)=>{
       setTimeout(()=>{ 
          // const olderCounter=getState().ctr.counter;
           //console.log(olderCounter);
           dispatch(saveResult(res))},2000)
    }
};
export const deleteResult =(value)=>{
    return {
        type:typeaction.DELETE_RESULT,
        resultElId: value
    };
};