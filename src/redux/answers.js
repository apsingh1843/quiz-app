import * as actionTypes from './ActionTypes';

const initialState = {
    answersInfo: {}
};

export const Answers = (state = initialState, action) => {
    switch(action.type){
      case actionTypes.SET_ANSWER:
        return {
          ...state,
          answersInfo: {
            ...state.answersInfo,
            [action.questionId]:action.answer
          }
        }
      default:
        return state;
    }
}
