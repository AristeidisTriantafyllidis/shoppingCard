import React from "react";
import Card from "./Card";

export default function NavBar(props) {




    return (
        <div>
            <div className="upNav">
                <img className="cart-pic" src="./shoppingcart.png" />
                <p className="navText">{props.totalProducts}</p>
                <p className="upNav-text">Items</p>
            </div>
            <button className="refreshBtn" ><img className="refresh-pic" src="./refresh.png" /></button>
            <button onClick={() => props.recycleBtn()} className="recycleBtn"><img className="recycle-pic" src="./recyclebtn.png" /></button>

        </div>

    )
}