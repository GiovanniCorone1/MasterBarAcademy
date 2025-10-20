import { StateCreator } from "zustand"
import { Recipe } from "../types"

export type FavoriteSilceType={
    favorites: Recipe[]
    handleClickFavorite:(recipe:Recipe)=>void
    favoriteExists:(id:Recipe["idDrink"])=>boolean
    loadFromStorage:()=>void
}
export const createFavoritesSlice : StateCreator<FavoriteSilceType> = (set, get, ) => ({
    favorites: [],
    handleClickFavorite:(recipe:Recipe)=>{
      if(get().favoriteExists(recipe.idDrink)){
        set((state)=>({
          favorites:state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
        }))
    }else{
        set((state)=>({
          favorites:[...state.favorites , recipe]
        }))
      }
    //agregamos favoritos a local storage
    localStorage.setItem("favorites", JSON.stringify(get().favorites))
    },
    favoriteExists:(id)=>{
      return get().favorites.some(favorite => favorite.idDrink === id)
    },
    loadFromStorage:()=>{
      const storedFavorites = localStorage.getItem("favorites")
      if(storedFavorites){
        set({favorites:JSON.parse(storedFavorites)})
      }  
    }
})