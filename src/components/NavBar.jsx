import { Link, NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <div>
        <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to='/'>Inicio</Link></li>
      <li tabindex="0">
        <a>
          Categorías
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </a>
        <ul class="p-2 bg-base-100">
          <li><NavLink to='/category/cocina'>Cocina</NavLink></li>
          <li><NavLink to='/category/otros'>Otros</NavLink></li>
        </ul>
      </li>
      </ul>
    </div>
  </div>
  <div class="navbar-center">
    <Link to='/' class="btn btn-ghost normal-case text-xl">Desafío Nº 6 - Sincronizar Counter</Link>
  </div>
  <div class="navbar-end">

    <CartWidget/>
    
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="https://api.lorem.space/image/face?hash=33791" />
        </div>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Mi perfil
        </a>
        </li>
        <li><a>Mis pedidos</a></li>
        <li><a>Cerrar sesión</a></li>
      </ul>
    </div>
  </div>
</div>
    
    </div>
  )
}
export default NavBar