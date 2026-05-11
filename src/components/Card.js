import React from "react";

export default function Card(props) {

    const [product, setProduct] = React.useState(0)


    function add() {
        setProduct(product + 1)
        props.setTotalProducts(props.totalProducts + 1)
    }
    function decrement() {
        if (product > 0) {
            setProduct(product - 1)
            props.setTotalProducts(props.totalProducts - 1);
        }
    }
    function deleteElements() {

        props.setTotalProducts(props.totalProducts - product)
        props.deleteProduct(props.id);


    }



    return (
        <div className="card3">

            <div className="secondBtns">

                <p className="text">{product === 0 ? "Zero" : product}</p>
                <button className="addBtn" onClick={add}>+</button>
                <button className="decrementBtn" onClick={decrement}>-</button>
                <button className="deleteBtn" onClick={deleteElements}><img src="./delete.png" /></button>
            </div>
        </div>
    )
}

