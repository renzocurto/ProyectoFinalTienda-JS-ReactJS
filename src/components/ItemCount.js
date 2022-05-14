import React, { useState } from "react"

 const ItemCount = ({ stock, onAdd }) => {
 	const [count, setCount] = useState(0)

 	const addItem = () => {
 		if (count < stock) {
 			setCount(count + 1)
 		}
 	}
 	const removeItem = () => {
 		if (count > 0) {
 			setCount(count - 1)
 		}
 	}

 	return (
 		<>
 			<div className="flex gap-4 mt-4">
 				<div className="flex flex-row">
 					<button className="btn " onClick={removeItem}>
 						<i className="fas fa-minus">-</i>
 					</button>
 					<label className="alert alert-white">{count}</label>
 					<button className="btn " onClick={addItem}>
 						<i className="fas fa-plus">+</i>
 					</button>
 				</div>
 				<div>
 					<button
 						className="btn bg-primary text-white btn-block "
 						onClick={() => onAdd(count)}
 					>
 						Comprar
 					</button>
 				</div>
 			</div>
 		</>
 	)
 }

 export default ItemCount