//llamado a la API
import { CategoriesAPIResponseSchema, DrinksAPIResponse, RecipeAPIResponseSchema } from '../utils/recipes-schema';
import axios from "axios"
import { Drink, SearchFilter } from '../types/index';
//funcion para obtener la lista de categorias para ponerlo en el formulario
export const getCategories = async () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"  
  const {data} = await axios(url)
  //parse y safeparse hacen los mismo la diferencia es que safeParse devuelve un objeto con un atributo success con el mensaje de error y parse los errores se manejan con try catch
  const result = CategoriesAPIResponseSchema.safeParse(data)
  if(result.success){
    return result.data
  }
}
//funcion que se encarga obtener las recetas en funcion de la categoria y los ingredientes ingresados al formulario
export const getRecipes = async(filters:SearchFilter)=>{
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
  const {data} = await axios(url)
  const result = DrinksAPIResponse.safeParse(data)
  if(result.success){
    return result.data
  }
}

//funcion que se encarga de obtener la receta en funcion del id de la receta para visualizar la card de la receta
export const getRecipeById = async(id:Drink["idDrink"])=>{
  const url =`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  const {data} = await axios(url)
  const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])
  if(result.success){
    return result.data
  }
  throw new Error("Error al obtener la receta")
}