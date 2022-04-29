import { useEffect, useState } from "react";
import ItemCard from "./ItemCard"
import {itemsData} from "./Items"



const ItemList = () => {

    

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
    <div className="grid grid-cols-3 gap-3">
        {items.map (item => <ItemCard key = {item.id} items = {item}/>)}

    </div>
  )
}
export default ItemList