import { useState } from "react"
import Cart from "./Cart"
import SendOrder from "./SendOrder"

const Checkout = () => {

    const [user, setUser] = useState({})

    //guarda la información ingresada en los inputs en el estado user a medida que se va ingresando.

    const handleInput = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }


  return (
      <>
      <Cart/>
      <div>
        <div className="mt-10">
            <h2 className="btn btn-ghost normal-case text-lg md-flex flex justify-center">Completar orden</h2>
            </div>
            <div className="md-flex flex justify-center"> 
            <input type="text" placeholder="Nombre y apellido" class="input input-bordered input-sm w-full max-w-xs mt-5 ml-3" onChange={handleInput} name="name" value={user.name}/>
            </div>
            <div className="md-flex flex justify-center">
            <input type="text" placeholder="Teléfono" class="input input-bordered input-sm w-full max-w-xs mt-5 ml-3" onChange={handleInput} name="phone" value={user.phone}/>
            </div>
            <div className="md-flex flex justify-center">
            <input type="text" placeholder="Mail" class="input input-bordered input-sm w-full max-w-xs mt-5 ml-3" onChange={handleInput} name="email" value={user.email}/>
            </div>
      </div>
            <SendOrder user = {user} />
    </>
  )
}
export default Checkout