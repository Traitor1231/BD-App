import React from 'react'
import { ChooseOperatorTextWrapper } from './NavigationStyles'
import NavigationOperatorsData from "./NavigationContent/NavigationOperatorsData";
import {NavigationPropsType} from "./NavigationTypes";

const Navigation: React.FC<NavigationPropsType> = ({ store }) => {
  return (
    <header>
      <nav>
        <ChooseOperatorTextWrapper>
          ВЫБЕРИТЕ ОПЕРАТОРА
        </ChooseOperatorTextWrapper>
          <NavigationOperatorsData store={store}/>
      </nav>
    </header>
  )
}

export default Navigation
