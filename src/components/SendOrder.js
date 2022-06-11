import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const SendOrder = (user) => {

    const {deleteCart} = useContext(CartContext)

    const {cart, quantityCart} = useContext(CartContext)

    let id = (Math.random()*100000).toFixed(0)

    const sendOrder = () => {

        const orden = {

        id: id,
        buyer : user,
        totalItems : quantityCart(),
        items : cart

        }
        saveToFirestore(orden)
        
        idCompra(id)
        
        deleteCart()
    }

    const saveToFirestore = (orden) => {

        const db = getFirestore()
        const orders = collection(db, 'ordenes')

        addDoc(orders, orden)

        
    }

    const idCompra = (id) => {

      Swal.fire({
        title: 'Orden enviada',
        titleText: 'Tu ID de compra es '+id,
        text: 'Guardalo para poder hacer el seguimiento',
        icon: 'success',
        confirmButtonText: 'Ya lo guardé!'
      })

      
    }

    

  return (
    <>
    <div className="md-flex flex justify-center">
    <Link to='/' className= "btn mt-5" onClick={sendOrder}>Enviar orden</Link>
    </div>
    </>
  )
} 
export default SendOrder