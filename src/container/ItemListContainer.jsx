import { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    const db = getFirestore()

    const itemsList = collection(db, "items")

    getDocs(itemsList).then((snapshot) => {
        
      setItems(snapshot.docs.map((doc) => ({'id': doc.id, ...doc.data()})))
        
    })
},[])

return (
  ItemList({items})
)
}
export default ItemListContainer