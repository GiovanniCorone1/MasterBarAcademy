import { Dialog, Transition } from '@headlessui/react';
import { Fragment} from 'react';
import { useAppStore } from '../stores/useAppStore';
import { Recipe } from '../types/index';
import {CloseIcon } from '../assets/CloseIcon';
import { FavoriteIcon } from '../assets/FavoriteIcon';
export default function Modal(){
  const modal = useAppStore((state)=>state.modal)
  const closeModal=useAppStore((state)=>state.closeModal)
  const selectedRecipe=useAppStore((state)=>state.selectedRecipe)
  const renderIngredients = ()=>{
    const ingredients = []
    for(let i=1 ; i<=6 ;i++){
      //obtenemos los ingredientes y las medidas de la receta seleccionada
      //usamos el keyof para obtener el tipo de la propiedad del objeto Recipe
      const ingredient = selectedRecipe[`strIngredient${i}` as keyof Recipe] 
      const measure = selectedRecipe[`strMeasure${i}` as keyof Recipe]
      if(ingredient && measure){
        //si el ingrediente y la medida existen los pusheamos al array de ingredientes , en este caso esta bien usar push en react ya que no estamos mutando directamente el estado
        ingredients.push(
          <li key={i} className='text-lg font-normal'>
            {ingredient}-{measure}
          </li>
        )
      }
    }
    //retornamos el array de ingredientes
    return ingredients
  }
  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60 bg-opacity-70" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                  <Dialog.Title as="h3" className="text-gray-900 text-4xl font-extrabold my-5 text-center">
                      {selectedRecipe.strDrink}
                  </Dialog.Title>
                  <img src={selectedRecipe.strDrinkThumb} alt={`imagen de ${selectedRecipe.strDrinkThumb}`} className='mx-auto w-96'/>
                  <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                    Ingredientes y Cantidades:
                  </Dialog.Title>
                    {renderIngredients()}
                  <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                    Instrucciones
                  </Dialog.Title>
                    <p>{selectedRecipe.strInstructions}</p>
                  <div className="m-2 flex justify-center items-center gap-12">
                  <button className="size-14 rounded-full bg-orange-400 flex items-center justify-center cursor-pointer">
                     <FavoriteIcon />
                  </button>
                   <button className="size-14 rounded-full bg-black flex items-center justify-center cursor-pointer" onClick={closeModal}>
                     <CloseIcon/>
                  </button>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}