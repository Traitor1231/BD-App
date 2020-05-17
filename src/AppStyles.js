import styled from "styled-components";

export const WreapperMainContaner = styled.div`
 height: ${
    document.querySelector("html").clientHeight + "px" 
};
 display:flex;
 justify-content:center;
 align-items:center;
 background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
 background-size: 400% 400%;
 animation: gradient 10s ease infinite;
 @keyframes gradient {
     0% {
         background-position: 0% 50%;
    }
     50% {
         background-position: 100% 50%;
    }
     100% {
         background-position: 0% 50%;
    }
}

`


export const MainContaner = styled.div`
 text-align: center;
 display: flex;
 flex-direction: column;
 width: 100%;
 margin: 0px 15%;
 min-width: 205px;
 opacity:0;
 transition: 1s;
 animation: show 3s 1;
 animation-fill-mode: forwards;
 animation-delay: 0.5s;
 @keyframes show{
     0%{
         opacity:0;
    }
     100% {
         opacity:1;
    }
}
 
`
