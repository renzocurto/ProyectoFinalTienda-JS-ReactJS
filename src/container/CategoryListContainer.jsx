import { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = () => {

  const {catId} = useParams()

  const [items, setItems] = useState([])

  useEffect(() => {
    const db = getFirestore()

    const q = query(collection(db, "items"), where("category" , "==", catId))

    getDocs(q).then((snapshot) => {
      if(snapshot.size === 0){
        console.log("Category error")

      }
      setItems(snapshot.docs.map((doc) => ({'id': doc.id, ...doc.data()})))
        
    })
},[catId])

return (
    ItemList({items})
  )
  }
export default ItemListContainer