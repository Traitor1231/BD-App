import React from 'react';
import { Route } from 'react-router-dom';
import Mts from './components/Operators/Mts';
import BeeLine from './components/Operators/BeeLine';
import Megafon from './components/Operators/Megafon';
import { MainContaner, WreapperMainContaner } from './AppStyles';
import NavigationContainer from './components/Navigation/NavigationContainer';

const App = () => (
  <WreapperMainContaner>
    <MainContaner>
      <Route exact path="/" render={() => <NavigationContainer />} />
      <Route path="/Mts" render={() => <Mts />} />
      <Route path="/BeeLine" render={() => <BeeLine />} />
      <Route path="/Megafon" render={() => <Megafon />} />
    </MainContaner>
  </WreapperMainContaner>
);
export default App;
