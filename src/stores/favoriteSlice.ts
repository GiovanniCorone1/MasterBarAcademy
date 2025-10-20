import { StateCreator } from "zustand"
import { Recipe } from "../types"

export type FavoriteSilceType={
    favorites: Recipe[]
    handleClickFavorite:(recipe:Recipe)=>void
    favoriteExists:(id:Recipe["idDrink"])=>boolean
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
    },
    favoriteExists:(id)=>{
      return get().favorites.some(favorite => favorite.idDrink === id)
    }
})