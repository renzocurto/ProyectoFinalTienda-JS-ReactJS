import { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {

  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])

  useEffect(() => {

    setLoading(true)
    const db = getFirestore()

    const itemsList = collection(db, "items")

    getDocs(itemsList).then((snapshot) => {
        
      setItems(snapshot.docs.map((doc) => ({'id': doc.id, ...doc.data()})))
        
    })
    getDocs(itemsList).finally(() => {
        
      setLoading(false) 

    })
},[])

return (
  loading ? (
    <div className=" md-flex flex justify-center">
    <div className=" md-flex badge badge-lg mr-5"></div>
    <div className=" md-flex badge badge-md mr-5"></div>
    <div className=" md-flex badge badge-sm mr-5"></div>
    <div className=" md-flex badge badge-xs mr-5"></div>
    <div className=" md-flex font-bold">Cargando Catálogo</div>
    </div>
  ) :
   (ItemList({items}))
)
}
export default ItemListContainer