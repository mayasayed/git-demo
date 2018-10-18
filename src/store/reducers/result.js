import * as actionTypes from '../actions';
import { updateObject } from '../utility';
const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.STORE_RESULT: return updateObject(state, { results: state.results.concat({ id: new Date(), value: action.result }) })
    case actionTypes.DELETE_RESULT:
      const UpdateArray = state.results.filter(result => result.id !== action.resultElId);
      return updateObject(state, { results: UpdateArray });
    default: return state;
  }
  //return state;
};
export default reducer;