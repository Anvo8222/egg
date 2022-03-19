import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const makeSelectGlobal = () => createSelector(selectGlobal, state => state);

const makeSelectTurn = () => createSelector(selectGlobal, state => state.turn);

const makeSelectBackgroundType = () =>
  createSelector(selectGlobal, state => state.backgroundType);

const makeSelectDragonType = () =>
  createSelector(selectGlobal, state => state.dragonImage);
export {
  makeSelectGlobal,
  makeSelectTurn,
  makeSelectBackgroundType,
  makeSelectDragonType,
};
