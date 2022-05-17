import React, { useState } from "react"

 const ItemCount = ({ stock, onAdd, id }) => {
 	const [count, setCount] = useState(0)

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
 					<button className="btn bg-primary text-white btn-block " onClick={() => onAdd(count)}>Agregar al carrito</button>
 			</div>
 	)
 }
 export default ItemCount