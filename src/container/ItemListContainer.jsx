import { useEffect, useState } from "react";
import {itemsData} from "../components/Items";
import ItemList from "../components/ItemList";

const ItemListContainer = () => {
  
  
  const [items, setItems] = useState([])

  useEffect(() => {
    const getItems = new Promise ((resolve, reject) => {

      setTimeout ( () => {
          
          resolve(itemsData)

      }, 2000)
    })

    getItems.then ((result) => {

      setItems(result)
    })
  

  
}, [])
return (

    ItemList({items})

)
}
export default ItemListContainer