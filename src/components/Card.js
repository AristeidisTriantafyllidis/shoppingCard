import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React from "react";

export default function Card(props){
const[totalProducts,setTotalProducts]=React.useState(0)
const [product,setProduct]=React.useState(0)

function add(){
    setProduct(product+1)
}
function decrement(){
    setProduct(product-1)
}
function deleteElements(){
}
    return(
<div>
    <p>{totalProducts}</p>
        <div className="secondBtns">
            
<p>{product===0?"zero":product}</p>
<button onClick={add}>+</button>
<button onClick={decrement}>-</button>
<button onClick={deleteElements}>del</button>
        </div>
        </div>
    )
}
