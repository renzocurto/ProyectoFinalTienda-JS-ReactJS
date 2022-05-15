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
    <div class="card m:card-side bg-base-100 shadow-xl">
      <figure><img src={item.pictureUrl} alt="fotoItem"/></figure>
      <div class="card-body">
        <h2 class="card-title justify-center">{item.title}</h2>
        <p class="items-center text-center">{item.description}</p>
        <div class="card-actions justify-center">
          <button class="btn">{item.price}</button>
        </div>
        <div class="card-actions justify-center">
        <div class="form-control">
        </div>
          <ItemCount stock={item.stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
    </>
  )
}

export default ItemDetail