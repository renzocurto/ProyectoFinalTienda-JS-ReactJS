import { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = () => {

  const {catId} = useParams()

  const [loading, setLoading] = useState(true)

  const [items, setItems] = useState([])

  useEffect(() => {

    setLoading(true)
    const db = getFirestore()

    const q = query(collection(db, "items"), where("category" , "==", catId))

    getDocs(q).then((snapshot) => {
      if(snapshot.size === 0){
        console.log("Category error")

      }
      setItems(snapshot.docs.map((doc) => ({'id': doc.id, ...doc.data()})))
        
    })
    getDocs(q).finally(() => {
        
      setLoading(false) 

    })
},[catId])

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