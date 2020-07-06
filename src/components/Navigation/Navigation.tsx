import React from 'react'
import { ChooseOperatorTextWrapper } from './NavigationStyles'
import NavigationOperatorsData from './NavigationContent/NavigationOperatorsData/NavigationOperatorsData'
import { OperatorsInfoPropsType } from '../../Types/OperatorsInfoPropsType';

const Navigation: React.FC<OperatorsInfoPropsType> = ({ operatorsInfoProps }) => {
  return (
    <header>
      <nav>
        <ChooseOperatorTextWrapper>
          ВЫБЕРИТЕ ОПЕРАТОРА
        </ChooseOperatorTextWrapper>
        <NavigationOperatorsData operatorsInfoProps={operatorsInfoProps}/>
      </nav>
    </header>
  )
};

export default Navigation
