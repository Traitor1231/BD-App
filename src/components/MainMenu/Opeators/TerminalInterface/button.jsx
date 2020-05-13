
import React from 'react';
import {NavLink, Redirect} from "react-router-dom";



const Button = (props) =>{

    return (

        <div>
          <NavLink to="/"><button>Назад</button></NavLink>
            <button>Оплатить</button>
        </div>

    )

}

export default Button