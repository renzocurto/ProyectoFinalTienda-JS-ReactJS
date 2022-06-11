import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

const CartItem = ({cart}) => {

    const {deleteItem} = useContext(CartContext)

  return (
    <tr>
        <th className="text-center">
        {cart.quantity}
        </th>
        <td>
        <div className=" md-flex flex items-center space-x-3 justify-center">
            <Link to= {cart.adress} className="avatar">
                <div className=" md-flex mask mask-squircle w-10 h-10 ">
                    <img src={cart.pictureUrl} alt="Avatar Tailwind CSS Component" />
                </div>
            </Link>
            <Link to= {cart.adress}>
                <div className=" md-flex font-bold">{cart.title}</div>
                <div className=" md-flex text-sm opacity-50">{cart.color} </div>
            </Link>
        </div>
        </td>
        <td className="text-center font-bold">
        ${cart.price}
        </td>
        <th>
        <button className="btn btn-ghost btn-xs" onClick={() => deleteItem(cart.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
        </button>
        </th>
    </tr>
    
  )
}
export default CartItem