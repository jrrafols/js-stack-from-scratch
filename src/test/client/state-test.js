/* eslint-disable import/no-extraneous-dependencies, no-unused-expressions */

import { createStore, combineReducers } from 'redux';
import { should } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import dogReducer from '../../client/reducers/dog-reducer';
import { makeBark } from '../../client/actions/dog-actions';

should();
let store;

describe('App State', () => {
  describe('Dog', () => {
    beforeEach(() => {
      store = createStore(combineReducers({
        dog: dogReducer,
      }));
    });
    describe('makeBark', () => {
      it('should make hasBarked go from false to true and back', () => {
        store.getState().dog.get('hasBarked').should.be.false;
        store.dispatch(makeBark());
        store.getState().dog.get('hasBarked').should.be.true;
        store.dispatch(makeBark());
        store.getState().dog.get('hasBarked').should.be.false;
      });
    });
  });
});
