import { ChangeEvent, FormEvent, useEffect, useMemo , useState } from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router"
import { Link } from 'react-router';
import { useAppStore } from '../stores/useAppStore';
export const Header = () => {
  const [searchFilters , setSearchFilters]=useState({
    ingredient:"",
    category:""
  })
  const {pathname} =useLocation()
  const isHome = useMemo(() => pathname ==="/recipes", [pathname])
  //conectamos el componente al store
  const fetchCategories=useAppStore((state)=>state.fetchCategories)
  const searchRecipes=useAppStore((state)=>state.searchRecipes)
  //const {drinks} = categories , la misma idea cuando lo mapeamos
  const {drinks} = useAppStore((state)=>state.categories)
  useEffect(()=>{
    fetchCategories()
  },[])
  //lo que escribimos en el input se guarda en el estado
  const handleChange=(e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>)=>{
    // e.preventDefault();
    const {name , value} = e.target
    setSearchFilters({
      ...searchFilters,
      [name]:value
    })
  }
  const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(Object.values(searchFilters).includes("")){
      console.log("todos los campos son requeridos")
      return
    }
    //consultamos las recetas
    searchRecipes(searchFilters)
  }
  return (
    <header className={isHome ?"bg-[url(/imagen1.webp)] bg-left bg-cover":"bg-slate-800"}>
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">
             <img src="Logo.webp" alt="logo de la pagina" className="rounded-full cursor-pointer h-32 w-32"/>
            </Link>
          </div>
          <nav className="flex gap-4 text-white">
            <NavLink to="/" className={({isActive})=> isActive ? "text-orange-400 uppercase font-bold":"text-white uppercase font-bold"}>Inicio</NavLink>
            <NavLink to="/recipes" className={({isActive})=> isActive ? "text-orange-400 uppercase font-bold bg-white/25 px-1.5 hover:bg-white":"text-white uppercase font-bold"}>Recetas</NavLink>
            <NavLink to="/favorites" className={({isActive})=> isActive ? "text-orange-400 uppercase font-bold":"text-white uppercase font-bold"}>Favorites</NavLink>
          </nav>
          {/* el formulario tbm podria ser un componente */}
        </div>
          {isHome && (
            <form className="md:w-1/2 2xl:w-1/3 bg-[#D4AF37] my-32 p-10 rounded-lg shadow space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <label htmlFor="ingredient" className="block text-white uppercase font-extrabold text-lg">Ingredientes o nombre</label>
                <input id="ingredient" type="text" name="ingredient" className="p-3 w-full rounded-lg focus:outline-none bg-white" placeholder="Ingrediente o nombre" onChange={handleChange} value={searchFilters.ingredient}/>
              </div>
              <div className="space-y-4">
                <label htmlFor="category" className="block text-white uppercase font-extrabold text-lg">Categoría</label>
                <select id="category" name="category" className="p-3 w-full rounded-lg focus:outline-none bg-white" onChange={handleChange} value={searchFilters.category} >
                  <option value="">--Seleccione--</option>
                  {drinks.map(({strCategory})=>(
                    <option key={strCategory} value={strCategory}>{strCategory}</option>
                  ))}
                </select>
              </div>
              <input type="submit" value="Buscar recetas" className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase" />
            </form>
          )}
      </div>
    </header>
  )
}
