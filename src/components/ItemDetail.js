import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext"

const ItemDetail = ({item}) => {

  const [terminar, setTerminar] = useState (false)

  const {addToCart} = useContext(CartContext)

  const onAdd = (count) => {
    
    setTerminar(true)
    console.log(count, item.title)
    addToCart(item,count) 
  }
  
  return (
    <>
    <div class="card m:card-side bg-base-100 shadow-xl">
      <figure><img src={item.pictureUrl} alt="fotoItem"/></figure>
      <div class="card-body">
        <h2 class="card-title justify-center">{item.title}</h2>
        <p class="items-center text-center">{item.description}</p>
        <div class="card-actions justify-center">
          <button class="btn">${item.price}</button>
        </div>
        <div class="card-actions justify-center">
          <div class="form-control">
            {terminar ? 
              (<>
              <Link to = '/' class="btn btn-primary mb-2">Volver al catálogo</Link>
              <Link to = '/cart' class="btn btn-primary">Terminar compra</Link>
              </>)
              :
              (<ItemCount stock={item.stock} onAdd={onAdd} id = {item.id} />)}
            
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ItemDetail