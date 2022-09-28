import React, { useState } from "react";
import {serviceDropdown} from "./NavItems";
import "./Dropdown.css";
import { Link } from "react-router-dom";
function Dropdown(){
    const [ServiceDropdown,setServiceDropdown] = useState(false);
    return(
      <>
       <ul className={ServiceDropdown? "services-menu clicked" :"services-menu" }
       onClick={() => setServiceDropdown(!ServiceDropdown)}>
           {serviceDropdown.map((Serviceitem) => {
               return(
                   <li key={Serviceitem.id}>
                       <Link to={Serviceitem.path} className={Serviceitem.cName}
                       onClick={() => setServiceDropdown(false)}>{Serviceitem.title}</Link>
                   </li>
               )
           })}
       </ul>
      </>
    );
}

export default Dropdown;