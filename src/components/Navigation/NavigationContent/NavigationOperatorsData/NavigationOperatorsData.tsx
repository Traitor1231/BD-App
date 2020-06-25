import React from 'react'
import { NavLink } from 'react-router-dom'
import {
    OperatorLogo,
    OperatorLogoWrapper,
    OperatorTextWrapper
} from './NavigationOperatorsDataStyles'
import {StoreTypes} from "../../../../Types/Types";

// @ts-ignore
const NavigationOperatorsData: React.FC<StoreTypes> = ({ store }) => {
    return (
        store.operatorsInfo.map((store) => (
            <NavLink to={`/${store.name}`}>
                <OperatorLogoWrapper>
                    <OperatorLogo src={store.image} alt={store.alt} />
                    <OperatorTextWrapper>{store.name}</OperatorTextWrapper>
                </OperatorLogoWrapper>
            </NavLink>
        ))
    )
}

export default NavigationOperatorsData
