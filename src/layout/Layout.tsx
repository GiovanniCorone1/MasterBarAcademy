import { Outlet } from "react-router"
import { Header } from "../components/Header"
import Modal from "../components/Modal"
import Footer from "../components/Footer"
import { useEffect } from "react"
import { useAppStore } from "../stores/useAppStore"
export const Layout = () => {
  const loadFromStorage= useAppStore((state)=>state.loadFromStorage)
  useEffect(()=>{
    loadFromStorage()
  },[])
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
