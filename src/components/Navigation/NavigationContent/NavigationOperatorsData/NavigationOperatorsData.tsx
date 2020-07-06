import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  OperatorLogo,
  OperatorLogoWrapper,
  OperatorTextWrapper
} from './NavigationOperatorsDataStyles'
import { OperatorsInfoPropsType } from '../../../../Types/OperatorsInfoPropsType';

// @ts-ignore
const NavigationOperatorsData: React.FC<OperatorsInfoPropsType> = ({ operatorsInfoProps }) => {
  return (
    operatorsInfoProps.map((operatorsInfo) => (
      <NavLink to={`/${operatorsInfo.name}`}>
        <OperatorLogoWrapper>
          <OperatorLogo src={operatorsInfo.image} alt={operatorsInfo.alt} />
          <OperatorTextWrapper>{operatorsInfo.name}</OperatorTextWrapper>
        </OperatorLogoWrapper>
      </NavLink>
    ))
  )
};

export default NavigationOperatorsData
