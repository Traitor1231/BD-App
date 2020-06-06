import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  ChooseOperatorTextWrapper, OperatorLogo, OperatorLogoWrapper, OperatorTextWrapper,
} from './NavigationStyles';

const Navigation = (props) => {
  const NavigationContent = props.props.state.operatorsInfo.map((store) => (
    <NavLink to={`/${store.name}`}>
      <OperatorLogoWrapper>
        <OperatorLogo src={store.image} alt={store.alt} />
        <OperatorTextWrapper>
          {store.name}
        </OperatorTextWrapper>
      </OperatorLogoWrapper>
    </NavLink>
  ));
  return (
    <header>
      <nav>
        <ChooseOperatorTextWrapper> ВЫБЕРИТЕ ОПЕРАТОРА</ChooseOperatorTextWrapper>
        {NavigationContent}
      </nav>
    </header>
  );
};

export default Navigation;
