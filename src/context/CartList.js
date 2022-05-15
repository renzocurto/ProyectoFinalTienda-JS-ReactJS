import { useContext } from "react"
import { CartContext } from "./CartContext"

const CartList = () => {

    const { cart } = useContext(CartContext)


  return (

    <div>
        {cart.map (carts => carts.title).join('-')} 
    </div>
    
  )
}
export default CartList