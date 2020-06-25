import React from 'react'
import StoreContext from '../../StoreContext'
import Navigation from './Navigation'

const NavigationContainer: React.FC = () => {
    return (
        <StoreContext.Consumer>
            {(store: any) => <Navigation store={store}/>}
        </StoreContext.Consumer>
    )
};

export default NavigationContainer
