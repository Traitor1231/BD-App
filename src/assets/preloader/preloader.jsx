import React from 'react';
import styled from "styled-components";

const Preloader = styled.div`
@keyframes load {
    0%{
        opacity: 0.08;
/*         font-size: 10px; */
/* \t\t\t\tfont-weight: 400; */
\t\t\t\tfilter: blur(5px);
\t\t\t\tletter-spacing: 3px;
        }
    100%{
/*         opacity: 1; */
/*         font-size: 12px; */
/* \t\t\t\tfont-weight:600; */
/* \t\t\t\tfilter: blur(0); */
        }
}

.animate {
\tdisplay:flex;
\tjustify-content: center;
\talign-items: center;
\theight:100%;
\tmargin: auto;
/* \twidth: 350px; */
/* \tfont-size:26px; */
\tfont-family: Helvetica, sans-serif, Arial;
\tanimation: load 1.2s infinite 0s ease-in-out;
\tanimation-direction: alternate;
\ttext-shadow: 0 0 1px white;
}
body, html{
\theight: 96vh;
\tbackground-color: #111;
\tcolor: white;
}
 `
const PreloaderWrapper = () =>{
    return(
        <Preloader>load</Preloader>
    )
}
export default PreloaderWrapper