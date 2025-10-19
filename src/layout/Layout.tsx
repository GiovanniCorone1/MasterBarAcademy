import { Outlet } from "react-router"
import { Header } from "../components/Header"
import Modal from "../components/Modal"
import Footer from "../components/Footer"
export const Layout = () => {
  return (
    <>
    {/* componente que se repite en la pagina */}
       <Header/>
    {/* el outlet indica el contenido unico de cada pagina */}
      <Outlet/>
      <Modal/>
      <Footer/>
    </>
  )
}
