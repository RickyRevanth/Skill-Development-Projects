import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { navItems } from "./NavItems";
import Button from "./Button";
import Dropdown from "./Dropdown";
import ProductsDropdown from "./ProductsDropdown";
function Navbar(){
    const [serviceDropdown,setServiceDropdown] = useState(false);
    const [productDropdown,setProductDropdown] = useState(false);
    return(
        <>
        <nav className="navbar">
            <ul className="logo-space"></ul>
         <Link to="/" className="logo">PropertyPortal</Link>
         <div className="spacer"/>
         <ul className="nav-items">
             {navItems.map((item) => {
                 if(item.title==="Services"){
                     return(
                    <li key={item.id} className={item.cName}onMouseEnter={()=> setServiceDropdown(true)} onMouseLeave={()=>setServiceDropdown(false)}>
                    <Link to={item.path} >{item.title}</Link>
                    {serviceDropdown && <Dropdown/>}
                    </li>
                     );
                 }
                 if(item.title==="Products"){
                    return(
                   <li key={item.id} className={item.cName}onMouseEnter={()=> setProductDropdown(true)} onMouseLeave={()=>setProductDropdown(false)}>
                   <Link to={item.path} >{item.title}</Link>
                   {productDropdown && <ProductsDropdown/>}
                   </li>
                    );
                }
                 return(
                 <li key={item.id} className={item.cName}>
                     <Link to={item.path}>{item.title}</Link>
                 </li>
                 );
             })}
         </ul>
         <Button/>
         <ul className="button-space"></ul>
        </nav>
        </>
    )
}

export default Navbar;