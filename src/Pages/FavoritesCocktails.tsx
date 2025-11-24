import { useMemo } from "react"
import { DrinkCard } from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"

export const FavoritesCocktails = () => {
  const favoritesCocktails= useAppStore((state)=>state.favorites)
  const hasFavorites= useMemo(()=>favoritesCocktails.length, [favoritesCocktails])
  return (
    <section className="bg-primary px-14">
    <h1 className="text-6xl font-extrabold text-[#e7e8ea]">Favoritos</h1>
    {hasFavorites ?(
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-10'>
    {
      favoritesCocktails.map((drink)=>(
         <DrinkCard
          key={drink.idDrink}
          drink={drink}/>))
    }
    </div>):(<p className='my-10 text-center text-2xl text-[#e7e8ea]'>No tienes cócteles favoritos aún</p>)
    }
    </section>
  )
}
