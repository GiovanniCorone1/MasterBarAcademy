import { BrowserRouter , Routes , Route } from "react-router";
import { Recipes } from "./Pages/Recipes";
import { FavoritesCocktails } from "./Pages/FavoritesCocktails";
import { Layout } from './layout/Layout';
function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          {/* el atributo index para que indique que es el componente principal  */}
          <Route path="/recipes" element={<Recipes/>} index/> 
          <Route path="/favorites" element={<FavoritesCocktails/>}/>
        </Route>
      </Routes>    
    </BrowserRouter>
  )
}
export default AppRoute
