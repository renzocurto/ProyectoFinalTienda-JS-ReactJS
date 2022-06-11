
import { useContext } from "react"
import { Link } from "react-router-dom"
import {CartContext} from "../context/CartContext"
import CartItem from "./CartItem"

const Cart = () => {

  const {cart, quantityCart, totalCart, deleteCart} = useContext(CartContext)

  let quantity = quantityCart()

  return (
    <>
    {quantity ?
    <>
    <div className=" md-flex flex-wrap justify-center overflow-x-auto w-full">
    <table className="table w-full ">
 
      <thead>
        <tr>
          <th className="text-center">Cantidad</th>
          <th className="text-center">Ítem</th>
          <th className="text-center">Precio</th>
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
            <th className="text-center text-bold">Total: $ {totalCart()} </th>
            <th className="text-center"></th>
          </tr>
      </tfoot>
    </table>
  </div>


  
    <div className=" md-flex flex justify-center">
      <Link to='/' className="btn justify-items-center">Catálogo</Link>
      <Link to='/checkout' className="btn justify-items-center ml-5">Comprar carrito</Link>
      <button className="btn justify-items-center ml-5" onClick={deleteCart}>Borrar carrito</button>
    </div>
    </>
    :
    <div className=" md-flex justify-items-center">
      <div className=" md-flex alert shadow-lg justify-center">
        <div className=" md-flex justify-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <h3 className="font-bold ">Carrito vacío</h3>
          </div>
        </div>
      </div>
      <div className=" md-flex flex justify-center">
        <Link to='/' className="btn mt-5 w-1/4">Catálogo</Link>
      </div>
    </div>
  }
    </>
  )
}
export default Cart




