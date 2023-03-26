import { decCounter, inkCounter } from './actionTypes';
import { LABEL_COUNTER } from './constants';

export const inkAC = (label) => {
  return {
    type: inkCounter(label),
  };
};

export const deckAC = (label) => {
  return {
    type: decCounter(label),
  };
};

export const inkAll = () => (dispatch, getState) => {
  const footerCounter = getState().footerCounter;

  dispatch(inkAC(LABEL_COUNTER.header));
  dispatch(inkAC(LABEL_COUNTER.main));
  if (footerCounter < 5) {
    dispatch(inkAC(LABEL_COUNTER.footer));
  }
};

