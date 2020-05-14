import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import store from "../../../store"

const OperatorLogoWrapper = styled.div`
    display:inline-block;
    -webkit-transition: all 0.3s ease;;
    -moz-transition: all 0.3s ease;;
    -o-transition: all 0.3s ease;;
     transition: all 0.3s ease;
     
    :hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    
   
}
`

const OperatorLogo = styled.img`
    max-width: 150px;



}
    
`;

const OperatorTextWrapper = styled.div`
    color:white;
`
let NavigationContent = store.map(store => <NavLink to={"/" + store.name}><OperatorLogoWrapper><OperatorLogo
    src={store.image} alt={store.alt}/>
    <OperatorTextWrapper>{store.name}</OperatorTextWrapper>
</OperatorLogoWrapper></NavLink>)

const Navigation = (props) => {

    return (
        <div>
            {NavigationContent}
        </div>
    )

}

export default Navigation