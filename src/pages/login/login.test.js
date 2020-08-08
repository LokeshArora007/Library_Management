import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import { createStore, StoreProvider } from 'easy-peasy';
import model from '../../state/model';
import SignInSide from './login';

describe('Login Page', () => {
  let shallow;
  let wrapper;

  beforeAll(() => {
    shallow = createShallow({ dive: true, untilSelector: 'button' });
  });

  beforeEach(() => {
    const store = createStore(model);
    const app = (
      <StoreProvider store={store}>
        <SignInSide.WrappedComponent />
      </StoreProvider>
    );
    wrapper = shallow(app);
  });

  it('should render page', () => {
    expect(wrapper.length).toBe(1);
  });

  it('should render user textfield', () => {
    console.log(wrapper);
  });
});