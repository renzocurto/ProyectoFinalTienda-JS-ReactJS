
import { createContext, useState } from "react";

export const CartContext = createContext ({
    cart: [],
    addToCart: () => {},
    isInCart: () => {},

})   

const CartContextProvider = ( {children} ) => {

    const [cart, setCart] = useState( [] )

    const isInCart = (id) => cart.find((item) => item.id === id)

    const addToCart = ( item, cant ) => {

        const newCart = [...cart]

        const itemEnCart = isInCart(item.id)

        if (itemEnCart) {

            newCart[newCart.findIndex ((item) => item.id === itemEnCart.id)].quanity += cant

            setCart (newCart)

            return
        }

        item.quantity = cant

        setCart([...newCart, item])
        
    }


  return (

    <CartContext.Provider value = { { cart, addToCart, isInCart, setCart }} >
        {children}
    </CartContext.Provider>
    
  )
}

export default CartContextProvider