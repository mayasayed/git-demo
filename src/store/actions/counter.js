import * as typeaction from './actions';

export const increment =() =>{
    return {
          type:typeaction.INCREMENT
    };
};
export const decrement =() =>{
   return {
         type:typeaction.DECREMENT
   };
};
export const add =(value)=>{
   return {
       type:typeaction.ADD,
        value: value
   };
};
export const substract =(value)=>{
   return {
       type:typeaction.SUBTRACT,
        value: value
   };
};