import { Drink } from '../types/index';
import { useAppStore } from '../stores/useAppStore';
type DrinkCardProps={
  drink:Drink
}
export const DrinkCard = ({drink}:DrinkCardProps) => {
  const selectRecipe=useAppStore((state)=>state.selectRecipe)
  return (
    <div className='shadow-xl bg-[#e7e8ea] rounded-2xl'> 
      <div className='overflow-hidden'>
        <img src={drink.strDrinkThumb} alt={`Imagen ${drink.strDrink}`} className='hover:scale-125 transition-transform hover:rotate-2'/>
      </div>
      <div className='p-5'>
        <h2 className='text-2xl truncate font-black'>{drink.strDrink}</h2>
        <button className='bg-secondary hover:bg-secondary-hover mt-5 w-full p-3 font-bold text-white text-lg cursor-pointer' onClick={()=>selectRecipe(drink.idDrink)}>Ver receta</button>
      </div>
    </div>
  )
}
