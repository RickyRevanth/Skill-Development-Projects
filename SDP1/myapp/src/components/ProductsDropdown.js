import React, { useState } from "react";
import { productsDropdown } from "./NavItems";
import "./ProductsDropdown.css";
import { Link } from "react-router-dom";
function ProductsDropdown(){
    const [ProductsDropdown,setProductsDropdown]  = useState(false);
    return(
     <>
       <ul className={ProductsDropdown? "products-menu clicked" : "products-menu"}
       onClick={()=> setProductsDropdown(!ProductsDropdown)}>
             {productsDropdown.map((Productitem) => {
                return(
                    <li key={Productitem.id}>
                        <Link to={Productitem.path} className={Productitem.cName}
                        onClick={() => setProductsDropdown(false)}>{Productitem.title}</Link>
                    </li>
                )
            })}
        </ul>
     </>
    );
}

export default ProductsDropdown;