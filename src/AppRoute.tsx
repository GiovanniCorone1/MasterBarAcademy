import { BrowserRouter , Routes , Route } from "react-router";
import { Recipes } from "./Pages/Recipes";
import HomePage from "./Pages/HomePage";
import { FavoritesCocktails } from "./Pages/FavoritesCocktails";
import { Layout } from './layout/Layout';
import GenerateAI from "./Pages/GenerateAI";
function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<HomePage/>} />
          {/* el atributo index para que indique que es el componente principal  */}
          <Route path="/recipes" element={<Recipes/>} index/> 
          <Route path="/favorites" element={<FavoritesCocktails/>}/>
          <Route path="/generate-ai" element={<GenerateAI/>}/>
        </Route>
      </Routes>    
    </BrowserRouter>
  )
}
export default AppRoute