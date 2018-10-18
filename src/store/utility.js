// we use this to make our reducers leaner 
export const updateObject=(oldState,updatesValues)=>{
    return {
        ...oldState,
        ...updatesValues
    }
};