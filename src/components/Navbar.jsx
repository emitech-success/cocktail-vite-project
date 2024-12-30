import { NavLink } from "react-router-dom"
import Wrappers from "../assets/wrappers/Navbar"


const Navbar = () => {
  return (
    <Wrappers>
      <div className="nav-center">
        
        <span className="logo">EmySuccess</span>
        <div className="nav-links">
          <NavLink to={'/'}>
            Home
          </NavLink>
          <NavLink to={'/about'}>
            About
          </NavLink>
          <NavLink to={'/newsletter'}>
            Newsletter
          </NavLink>
        </div>
      </div>
    </Wrappers>
  )
}
export default Navbar