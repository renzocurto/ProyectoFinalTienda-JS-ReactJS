import React, { useState } from "react"
import { useCartContext } from "../context/CartContext"
import { useAppContext } from "./AppContext"


 const ItemCount = ({ stock, onAdd, id }) => {
 	const [count, setCount] = useState(0)

	 const {addToCart} = useCartContext

	 const {item} = useAppContext


 	const itemAdd = () => {

 		if (count < stock) {
 			setCount(count + 1)
 		}
 	}

 	const itemRemove = () => {

 		if (count > 0) {
 			setCount(count - 1)
 		}
 	}

	const itemToCart = (id, cant) => {

		const findItem = item.find((prod) => prod.id === id)

		addToCart(findItem, cant)

		onAdd(count)

	}

 	return (
 			<div className="flex gap-4 mt-4">
 				<div className="flex flex-row">
				<button className="btn btn-circle" onClick={itemRemove}>
 						<i className="fas fa-minus">-</i>
 					</button>

 					<label className="btn btn-ghost">{count}</label>
 					<button className="btn btn-circle" onClick={itemAdd}>
 						<i className="fas fa-plus">+</i>
 					</button>
 				</div>
 					<button className="btn bg-primary text-white btn-block " onClick={() => itemToCart(id, count)}>Agregar al carrito</button>
 			</div>
 	)
 }
 export default ItemCount