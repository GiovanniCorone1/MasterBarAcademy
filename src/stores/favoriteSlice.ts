import { StateCreator } from "zustand"
import { Recipe } from "../types"

export type FavoriteSilceType={
    favorites: Recipe[]
}
export const createFavoritesSlice : StateCreator<FavoriteSilceType> = () => ({
    favorites: []
})