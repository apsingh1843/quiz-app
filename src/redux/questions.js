import * as actionTypes from './ActionTypes';

const initialState = {
    selectedQuestion: 1,
};

export const Questions = (state = initialState, action) => {
    switch(action.type){
      case actionTypes.NEXT_QUESTION:
        return {
          ...state,
          selectedQuestion: state.selectedQuestion + 1
        }
      case actionTypes.PREV_QUESTION:
        return {
          ...state,
          selectedQuestion: state.selectedQuestion - 1
        }
      default:
        return state;
    }
}
