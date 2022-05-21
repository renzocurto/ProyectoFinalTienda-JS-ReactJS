import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext"

const CartItem = ({cart}) => {

    const {deleteItem} = useContext(CartContext)

    const totalItem = parseInt(cart.price) * cart.quantity

  return (
    <tr>
        <th className="text-center">
        {cart.quantity}
        </th>
        <td>
        <div class="flex items-center space-x-3 justify-center">
            <div class="avatar">
                <div class="mask mask-squircle w-10 h-10">
                    <img src={cart.pictureUrl} alt="Avatar Tailwind CSS Component" />
                </div>
            </div>
            <div>
                <div class="font-bold">{cart.title}</div>
                <div class="text-sm opacity-50">{cart.color} </div>
            </div>
        </div>
        </td>
        <td className="text-center font-bold">
        ${cart.price}
        </td>
        <td className="text-center font-bold">${totalItem}</td>
        <th>
        <button class="btn btn-ghost btn-xs" onClick={() => deleteItem(cart.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
        </button>
        </th>
    </tr>
    
  )
}
export default CartItem