import React from 'react';
import Navigation from './Navigation'

import BEELINE_logo from '../../assets/images/Bee-Line-logo.png';
import MTS_logo from '../../assets/images/Mts-logo.png';
import MEGAFON_logo from '../../assets/images/Megafon-logo.png';

type OperatorsInfoType = {
  name: string
  image: string
  alt: string
}

const operatorsInfoProps = [
  {
    name: 'BEELINE',
    image: BEELINE_logo,
    alt: 'BEELINE'
  },
  {
    name: 'MTS',
    image: MTS_logo,
    alt: 'MTS'
  },
  {
    name: 'MEGAFON',
    image: MEGAFON_logo,
    alt: 'MEGAFON'
  }
] as Array<OperatorsInfoType>;

const NavigationContainer: React.FC = () => <Navigation operatorsInfoProps={operatorsInfoProps}/>;

export default NavigationContainer
