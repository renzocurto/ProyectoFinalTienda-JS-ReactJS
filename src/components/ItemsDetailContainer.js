import { useEffect, useState } from "react"
import {itemsData} from "./Items";
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail";

const ItemsDetailContainer = () => {

    const [item, setItem] = useState([])

    const {itemId} = useParams ()

    useEffect(() => {

        const getItems = new Promise ((resolve) => {

            setTimeout(() => {

                const itemData = itemsData.find((item) => item.id === itemId)

                resolve (itemData)
                
            }, 1);

        })
        getItems.then((result) => {
            setItem(result)
        })
        
    },[itemId])

  return (

    ItemDetail({item})

  )
}
export default ItemsDetailContainer