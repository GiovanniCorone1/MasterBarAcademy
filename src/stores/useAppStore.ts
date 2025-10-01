import { create} from 'zustand'
import { createRecipeSlice, RecipesSliceType } from './recipeSlice';
import { devtools } from 'zustand/middleware';
export const useAppStore = create<RecipesSliceType>()(devtools((...a)=>({
  // de esta forma se conecta al store el slice de recipeSlice y se le pasa los argumentos set , get(para acceder al estado actual del store sin provocar una actualización (re-render) en los componentes) y api( Herramientas avanzadas para manipular el store fuera de React)
  ...createRecipeSlice(...a),
  }
)))