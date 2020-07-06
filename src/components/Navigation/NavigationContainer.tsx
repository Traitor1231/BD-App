import React from 'react';
import Navigation from './Navigation'

type OperatorsInfoType = {
  name: string
  image: string
  alt: string
}

const operatorsInfoProps = [
  {
    name: 'BEELINE',
    image: '/static/media/Bee-Line-logo.ee3e5307.png',
    alt: 'BEELINE'
  },
  {
    name: 'MTS',
    image: '/static/media/Mts-logo.dfeeed95.png',
    alt: 'MTS'
  },
  {
    name: 'MEGAFON',
    image: '/static/media/Megafon-logo.5d8d8480.png',
    alt: 'MEGAFON'
  }
] as Array<OperatorsInfoType>;

const NavigationContainer: React.FC = () => <Navigation operatorsInfoProps={operatorsInfoProps}/>;

export default NavigationContainer
