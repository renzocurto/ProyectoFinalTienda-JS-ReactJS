import React, { useState } from "react"

 const ItemCount = ({ stock, onAdd }) => {
 	const [count, setCount] = useState(0)

<<<<<<< HEAD
 	const addItem = () => {
=======
 	const handleAdd = () => {
>>>>>>> Desafio5
 		if (count < stock) {
 			setCount(count + 1)
 		}
 	}
<<<<<<< HEAD
 	const removeItem = () => {
=======
 	const handleRemove = () => {
>>>>>>> Desafio5
 		if (count > 0) {
 			setCount(count - 1)
 		}
 	}

 	return (
 		<>
 			<div className="flex gap-4 mt-4">
 				<div className="flex flex-row">
<<<<<<< HEAD
 					<button className="btn " onClick={removeItem}>
 						<i className="fas fa-minus">-</i>
 					</button>
 					<label className="alert alert-white">{count}</label>
 					<button className="btn " onClick={addItem}>
=======
 					<button className="btn " onClick={handleRemove}>
 						<i className="fas fa-minus">-</i>
 					</button>
 					<label className="alert alert-white">{count}</label>
 					<button className="btn " onClick={handleAdd}>
>>>>>>> Desafio5
 						<i className="fas fa-plus">+</i>
 					</button>
 				</div>
 				<div>
<<<<<<< HEAD
 					<button className="btn bg-primary text-white btn-block " onClick={() => onAdd(count)}>Comprar</button>
=======
 					<button
 						className="btn bg-primary text-white btn-block "
 						onClick={() => onAdd(count)}
 					>
 						Comprar
 					</button>
>>>>>>> Desafio5
 				</div>
 			</div>
 		</>
 	)
 }

 export default ItemCount