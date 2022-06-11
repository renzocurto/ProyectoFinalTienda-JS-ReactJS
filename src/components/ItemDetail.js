import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext"

const ItemDetail = ({items}) => {

  const [terminar, setTerminar] = useState (false)

  const {addToCart} = useContext(CartContext)

  const onAdd = (count) => {
    
    setTerminar(true)
    addToCart(items,count) 
  }
  
  return (
    <>
    <div className=" md-flex card m:card-side bg-base-100 shadow-xl">
      <figure><img src={items.pictureUrl} alt="fotoItem"/></figure>
      <div className=" md-flex card-body">
        <h2 className="card-title justify-center">{items.title}</h2>
        <p className="items-center text-center">{items.description}</p>
        <div className=" md-flex card-actions justify-center">
          <button className="btn">${items.price}</button>
        </div>
        <div className=" md-flex card-actions justify-center">
          <div className=" md-flex form-control">
            {terminar ? 
              (<>
              <Link to = '/' className="btn btn-primary mb-2">Volver al catálogo</Link>
              <Link to = '/cart' className="btn btn-primary">Terminar compra</Link>
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