import { createStore, combineReducers } from 'redux';
import { Questions } from './questions';
import { Answers } from './answers';

export const ConfigureStore = () => {
  const store = createStore(
      combineReducers({
        question : Questions,
        answer: Answers
      })
  );
  return store;
};
