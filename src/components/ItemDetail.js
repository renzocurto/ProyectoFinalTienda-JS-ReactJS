<<<<<<< HEAD
import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {

  const onAdd = (count) => {
    setTerminar(true)
    console.log(count)
  }

  const [terminar, setTerminar] = useState (false)

  return (
=======
import { useContext } from "react"
import CartContextProvider, { CartContext } from "../context/CartContext"
import CartList from "../context/CartList"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

const ItemDetail = ({item}) => {

  const cantidad = document.querySelector("#cantItem")

  const {addToCart} = useContext(CartContext)

  const onAdd = (count) => {
    console.log(count)
  }

  return (
    <>
    <CartList/>
>>>>>>> Desafio5
    <div class="card m:card-side bg-base-100 shadow-xl">
      <figure><img src={item.pictureUrl} alt="fotoItem"/></figure>
      <div class="card-body">
        <h2 class="card-title justify-center">{item.title}</h2>
        <p class="items-center text-center">{item.description}</p>
        <div class="card-actions justify-center">
          <button class="btn">{item.price}</button>
        </div>
        <div class="card-actions justify-center">
<<<<<<< HEAD
          <div class="form-control">
          </div>
            {terminar ? 
              (<Link to = '/cart' class="btn btn-primary" >Terminar compra</Link>)
              :
              (<ItemCount stock={item.stock} onAdd={onAdd} />)}
            
        </div>
      </div>
    </div>
=======
        <div class="form-control">
        </div>
          <ItemCount stock={item.stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
    </>
>>>>>>> Desafio5
  )
}

export default ItemDetail