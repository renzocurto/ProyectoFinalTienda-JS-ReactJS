
import { useContext } from "react"
import { Link } from "react-router-dom"
import {CartContext} from "../context/CartContext"
import CartItem from "./CartItem"

const Cart = () => {

  const {cart, quantityCart, totalCart} = useContext(CartContext)

  let quantity = quantityCart()

  return (
    <>
    {quantity ?
    <>
    <div class="overflow-x-auto w-full">
    <table class="table w-full">
 
      <thead>
        <tr>
          <th className="text-center">Cantidad</th>
          <th className="text-center">Ítem</th>
          <th className="text-center">Precio</th>
          <th className="text-center">Total ítem</th>
          <th className="text-center"></th>
        </tr>
      </thead>
      <tbody>
       {cart.map (cartt => <CartItem key = {cartt.id} cart = {cartt}/>)}
      </tbody> 
  
      <tfoot>
        <tr>
            <th className="text-center"></th>
            <th className="text-center"></th>
            <th className="text-center"></th>
            <th className="text-center"></th>
            <th className="text-center text-bold">Total: $ {totalCart()} </th>
          </tr>
      </tfoot>
    </table>
  </div>
  
    <div class="justify-items-center">
      <Link to='/' className="btn justify-items-center">Agregar más ítems</Link>
    </div>
    </>
    :
    <div className="justify-items-center">
      <div class="alert shadow-lg justify-center">
        <div className="justify-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <h3 class="font-bold">Carrito vacío</h3>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Link to='/' className="btn">Ir al catálogo</Link>
      </div>
    </div>
  }
    </>
  )
}
export default Cart




