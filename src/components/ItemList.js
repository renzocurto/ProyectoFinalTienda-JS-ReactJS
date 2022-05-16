import CartContextProvider from "../context/CartContext"
import CartList from "../context/CartList"
import ItemCard from "./ItemCard"

const ItemList = ({items}) => {

  return (
<<<<<<< HEAD

=======
<<<<<<< HEAD
    
=======

>>>>>>> Desafio5
>>>>>>> refs/remotes/origin/master
    <div className="grid grid-cols-3 gap-3 justify-items-center">
        {items.map (item => <ItemCard key = {item.id} items = {item}/>)}

    </div>

  )
}
export default ItemList