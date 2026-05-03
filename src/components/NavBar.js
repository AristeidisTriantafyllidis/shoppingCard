import React from "react";
import Card from "./Card";

export default function NavBar(props){

    const [totalProducts,setTotalProducts]=React.useState(0)
    
    if(props.product>0 ){
        setTotalProducts(totalProducts+1)
        
    }

    return(
<div>
    <div className="upNav">
        <img className="cart-pic" src="./shoppingcart.png"/>
<p className="navText">{totalProducts}</p>
<p className="upNav-text">Items</p>
</div>
<button className="refreshBtn">< img className="refresh-pic" src="./refresh.png"/></button>
<button className="recycleBtn"><img className="recycle-pic" src="./recyclebtn.png"/></button>

</div>

    )
}