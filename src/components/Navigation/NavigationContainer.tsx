import React from 'react';
import StoreContext from '../../StoreContext';
import Navigation from './Navigation';

const NavigationContainer = () => (
  <StoreContext.Consumer>
    {(store:any) => <Navigation store={store} />}
  </StoreContext.Consumer>
);

export default NavigationContainer;
