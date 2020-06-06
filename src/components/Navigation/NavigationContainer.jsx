import React from 'react';
import StoreContext from '../../StoreContext';
import Navigation from './Navigation';

const NavigationContainer = () => (
  <StoreContext.Consumer>
    {(store) => <Navigation props={store} />}
  </StoreContext.Consumer>
);

export default NavigationContainer;
