import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext"

const ItemDetail = ({items}) => {

  const [terminar, setTerminar] = useState (false)

  const {addToCart} = useContext(CartContext)

  const onAdd = (count) => {
    
    setTerminar(true)
    console.log(count, items.title)
    addToCart(items,count) 
  }
  
  return (
    <>
    <div class="card m:card-side bg-base-100 shadow-xl">
      <figure><img src={items.pictureUrl} alt="fotoItem"/></figure>
      <div class="card-body">
        <h2 class="card-title justify-center">{items.title}</h2>
        <p class="items-center text-center">{items.description}</p>
        <div class="card-actions justify-center">
          <button class="btn">${items.price}</button>
        </div>
        <div class="card-actions justify-center">
          <div class="form-control">
            {terminar ? 
              (<>
              <Link to = '/' class="btn btn-primary mb-2">Volver al catálogo</Link>
              <Link to = '/cart' class="btn btn-primary">Terminar compra</Link>
              </>)
              :
              (<ItemCount stock={items.stock} onAdd={onAdd} id = {items.id} />)}
            
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ItemDetail