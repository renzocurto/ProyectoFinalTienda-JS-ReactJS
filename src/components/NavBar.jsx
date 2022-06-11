import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import CartWidget from "./CartWidget"

const NavBar = () => {

  const { quantityCart } = useContext(CartContext)

  let quantity = quantityCart()

  return (
  <div>
    <div className=" md-flex navbar bg-base-100">
      <div className=" md-flex navbar-start">
        <div className=" md-flex dropdown">
          <label tabIndex="0" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link to='/'>Inicio</Link></li>
          <li tabIndex="0">
            <a href="/#">
              Categorías
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </a>
            <ul className="p-2 bg-base-100">
              <li><NavLink to='/category/cocina'>Cocina</NavLink></li>
              <li><NavLink to='/category/otros'>Otros</NavLink></li>
            </ul>
          </li>
          </ul>
        </div>
      </div>
      <div className=" md-flex navbar-center">
        <Link to='/' className="btn btn-ghost normal-case text-xl">Bazar JS</Link>
      </div>
      <div className=" md-flex navbar-end">

        {quantity ?
          <CartWidget/>
          :
          <></>
        }
        
        <div className=" md-flex dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className=" md-flex w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" alt="avatar"/>
            </div>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a  href="/#"className="justify-between">
                Mi perfil
            </a>
            </li>
            <li><a href="/#">Mis pedidos</a></li>
            <li><a href="/#">Cerrar sesión</a></li>
          </ul>
        </div>
      </div>
    </div>
      
  </div>
  )
}
export default NavBar