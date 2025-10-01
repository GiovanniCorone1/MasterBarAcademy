//slice para la creación de un store de recetas
import { StateCreator } from "zustand"
import { getCategories, getRecipes, getRecipeById } from '../services/RecipeService';
import { Categories, SearchFilter, Drinks, Drink, Recipe } from '../types/index';
export type RecipesSliceType = {
  categories: Categories,
  drinks:Drinks,
  selectedRecipe:Recipe,
  modal:boolean,
  fetchCategories: () => Promise<void>,
  searchRecipes: (searchFilters:SearchFilter) => Promise<void>,
  selectRecipe: (id:Drink["idDrink"]) => Promise<void>,
  closeModal: () => void, //cerrar el modal
}
// StateCreator es un type especial para crear un slice
export const createRecipeSlice:StateCreator<RecipesSliceType> = (set) => ({
  //los estados iniciales deben ponerse antes de setearse
  categories:{drinks:[]},
  drinks:{drinks:[]}, //al poner por encima de drinks en RecipeSliceType drinks es un objeto con otro drink dentro
  selectedRecipe:{} as Recipe, //inicializamos como un objeto vacio y le decimos que es de tipo Recipe, normalmente lo ponemos asi ya que en recipe-schema el objeto tiene muchos objetos dentro
  modal:false,
  //acciones:llamado a la API
  fetchCategories: async () => {
    const categories =await getCategories()
    set({categories})
  },
  searchRecipes:async(filters)=>{
    const drinks=await getRecipes(filters)
    set({drinks})
  },
  //obtenemos la receta por el id al hacer click al boton de la receta
  selectRecipe :async(id)=>{
    const selectedRecipe = await getRecipeById(id)
    set({selectedRecipe , modal:true}) //abrimos el modal al seleccionar la receta
  },
  closeModal:()=>{
    set({
      //cerramos el modal al hacer click fuera del modal
      modal:false , 
      selectedRecipe:{} as Recipe} //lmpiamos el objeto de la receta al cerrar el modal
    )}
})
