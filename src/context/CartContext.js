
import { createContext, useState } from "react";

export const CartContext = createContext ({
    cart: [],
    addToCart: () => {},
    isInCart: () => {},
    deleteItem: () => {},
    quantityCart: () => {},
    totalCart: () => {}
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

    const deleteItem = (id) => {

        const newCart =[...cart]

        const itemInCart = isInCart(id)

        if (!itemInCart) {

            return
        }

        const deleteItem = newCart.filter ((item) => item.id !== id)

        setCart(deleteItem)
    }

    const quantityCart = () => {

        let quantity = 0
        cart.forEach((item) => {
            quantity = quantity + item.quantity
        })
        return quantity

    }

    const totalCart = () => {

        let total= 0

        cart.forEach((item) => {
            total = total + (item.price * item.quantity)
            
        })
        return total
    }
    
    return (

    <CartContext.Provider value = {  {cart, addToCart, isInCart, deleteItem, quantityCart, totalCart} } >
        {children}
    </CartContext.Provider>
    
  )
}

export default CartContextProvider