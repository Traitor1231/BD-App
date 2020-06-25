import React from 'react'
import { ChooseOperatorTextWrapper } from './NavigationStyles'
import NavigationOperatorsData from "./NavigationContent/NavigationOperatorsData/NavigationOperatorsData";
import {StoreTypes} from "../../Types/Types";

const Navigation: React.FC<StoreTypes> = ({ store }) => {
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
