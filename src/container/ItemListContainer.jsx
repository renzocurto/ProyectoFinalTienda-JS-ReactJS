import { useEffect, useState } from "react";
import {itemsData} from "../components/Items";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  
  
  const [items, setItems] = useState([])

  const {catId} = useParams()

  useEffect(() => {
    const getItems = new Promise ((resolve, reject) => {

      setTimeout ( () => {

          const myCategory = catId 
          
            ? itemsData.filter((itemsData) => itemsData.category === catId) 
            : itemsData;


          
          resolve(myCategory)

      }, 2000)
    })

    getItems.then ((result) => {

      setItems(result)
    })
  

  
}, [catId])
return (

    ItemList({items})

)
}
export default ItemListContainer