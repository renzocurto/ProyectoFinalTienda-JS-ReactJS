
import { createContext, useState } from "react";

export const CartContext = createContext ({
    cart: [],
    addToCart: () => {},
    isInCart: () => {},

})

export const CartContextProvider = ( {children} ) => {

    const [cart, setCart] = useState( [] )

    const isInCart = (id) => cart.find((item) => item.id === id)

    const addToCart = ( item, cant ) => {

        const newCart = [...cart]

        const itemEnCart = isInCart(item.id)

        if (itemEnCart) {

            newCart[newCart.findIndex ((items) => items.id === itemEnCart.id)].quantity += cant

            setCart (newCart)

            return
        }

        item.quantity = cant

        setCart([...newCart, item])
        
    }

    console.log(cart)
    
    return (

    <CartContext.Provider value = {  {cart, addToCart, isInCart, setCart} } >
        {children}
    </CartContext.Provider>
    
  )
}

export default CartContextProvider