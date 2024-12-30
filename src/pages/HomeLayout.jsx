import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const HomeLayout = () => {
  return (
    <>
     <Navbar />
     <section className="page">
     <Outlet />
     </section>
      
      <footer>check for footer here</footer>
    </>
  )
}
export default HomeLayout