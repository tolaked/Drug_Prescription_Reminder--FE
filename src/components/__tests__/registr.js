import React from 'react';
import ReactDOM from 'react-dom'
import Register from '../auth/Register'
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import store from '../../store';

const mockStore = configureStore([]);

describe(`user onboarding`, ()=>{
    let store;
    let component;
    it(`should successfully signup a user`,()=>{
  beforeEach(() => {
    store = mockStore({
        requesting: false,
        user: {
            id:'54dgg35674bdgd3',
            email:'khalid@gmail.com',
            token:'6hdhggggd664gdgdgd634hhhhddh4j747474433hffgffgf'
        },
        loggedOut: true,
        error: null
    });
    store.dispatch = jest.fn();
    component = renderer.create(
      <Provider store={store}>
        <Register />
      </Provider>
    );
  });
    });
    it('should dispatch an action on button click', () => {
        renderer.act(() => {
          component.root.findByType('button').props.onClick();
        });
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(
          myAction({ payload: {
            id:'54dgg35674bdgd3',
            email:'khalid@gmail.com',
            token:'6hdhggggd664gdgdgd634hhhhddh4j747474433hffgffgf'
        } })
        );
      });
})