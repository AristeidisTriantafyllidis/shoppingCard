import React from "react";

export default function Card(props){
const [totalProducts,setTotalProducts]=React.useState("")
const [product,setProduct]=React.useState(0)
let total=0

function add(){
    setProduct(product+1)
}
function decrement(){
    if(product>0){
    setProduct(product-1)}
}
function deleteElements(index){

}
//setTotalProducts(product)

// React.useEffect(()=>{
//     if(product>0){
//         setTotalProducts(totalProducts+1)
//     }
// },product)
  
  
    return(
<div className="card3">

        <div className="secondBtns">
            
<p className="text">{product===0?"Zero":product}</p>
<button className="addBtn" onClick={add}>+</button>
<button className="decrementBtn" onClick={decrement}>-</button>
<button className="deleteBtn" onClick={()=>deleteElements()}><img src="./delete.png"/></button>
        </div>
        </div>
    )
}
