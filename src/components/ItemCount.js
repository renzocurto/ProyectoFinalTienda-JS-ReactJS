import React, { useState } from "react"

 const ItemCount = ({ stock, onAdd }) => {
 	const [count, setCount] = useState(0)

<<<<<<< HEAD
 	const handleAdd = () => {
=======
<<<<<<< HEAD
 	const addItem = () => {
=======
 	const handleAdd = () => {
>>>>>>> Desafio5
>>>>>>> refs/remotes/origin/master
 		if (count < stock) {
 			setCount(count + 1)
 		}
 	}
<<<<<<< HEAD
 	const handleRemove = () => {
=======
<<<<<<< HEAD
 	const removeItem = () => {
=======
 	const handleRemove = () => {
>>>>>>> Desafio5
>>>>>>> refs/remotes/origin/master
 		if (count > 0) {
 			setCount(count - 1)
 		}
 	}

 	return (
 		<>
 			<div className="flex gap-4 mt-4">
 				<div className="flex flex-row">
<<<<<<< HEAD
=======
<<<<<<< HEAD
 					<button className="btn " onClick={removeItem}>
 						<i className="fas fa-minus">-</i>
 					</button>
 					<label className="alert alert-white">{count}</label>
 					<button className="btn " onClick={addItem}>
=======
>>>>>>> refs/remotes/origin/master
 					<button className="btn " onClick={handleRemove}>
 						<i className="fas fa-minus">-</i>
 					</button>
 					<label className="alert alert-white">{count}</label>
 					<button className="btn " onClick={handleAdd}>
<<<<<<< HEAD
=======
>>>>>>> Desafio5
>>>>>>> refs/remotes/origin/master
 						<i className="fas fa-plus">+</i>
 					</button>
 				</div>
 				<div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
 					<button className="btn bg-primary text-white btn-block " onClick={() => onAdd(count)}>Comprar</button>
=======
>>>>>>> refs/remotes/origin/master
 					<button
 						className="btn bg-primary text-white btn-block "
 						onClick={() => onAdd(count)}
 					>
 						Comprar
 					</button>
<<<<<<< HEAD
=======
>>>>>>> Desafio5
>>>>>>> refs/remotes/origin/master
 				</div>
 			</div>
 		</>
 	)
 }

 export default ItemCount