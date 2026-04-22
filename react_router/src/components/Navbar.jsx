import { NavLink } from "react-router-dom"
import './Navbar.css'

function Navbar() {
  return (
    <header className="nav-bar">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/products'>Products</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
      <NavLink to='/admin'>Admin</NavLink>
      <NavLink to='/login'>Login</NavLink>
    </header>
  )
}

export default Navbar