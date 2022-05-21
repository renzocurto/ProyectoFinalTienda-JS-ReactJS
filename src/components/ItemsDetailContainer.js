import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import ItemDetail from "./ItemDetail";

const ItemsDetailContainer = () => {

    const [items, setItems] = useState([])

    const {itemId} = useParams ()

    useEffect(() => {

        const db = getFirestore()

        const itemDetail = doc(db, "items", itemId)

        getDoc(itemDetail).then((snapshot) => {

            setItems({'id': snapshot.id, ...snapshot.data()})
    
        })

    },[itemId])

    return (

        ItemDetail({items})

  )
}
export default ItemsDetailContainer