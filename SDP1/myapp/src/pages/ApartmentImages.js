import React from "react";
import photo1 from '../images/apartment1.jpg'
import photo2 from '../images/apartment2.jpg'
function ApartmentImages(){
    return(
        <>
        <div>
            <img src={photo2} ></img>
            <img src={photo1}></img>
        </div>
        </>
    )
}
export default ApartmentImages