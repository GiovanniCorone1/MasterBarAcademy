import { useAppStore } from '../stores/useAppStore';
import { useMemo } from 'react';
import { DrinkCard } from '../components/DrinkCard';
export const Recipes = () => {
  const drinks=useAppStore((state)=>state.drinks)
  const hasDrinks  = useMemo(() => drinks?.drinks.length || 0, [drinks])
  return (
    <>
      <h1 className='text-6xl font-extrabold'>Recetas</h1>
      {hasDrinks ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-10'>
          {
            drinks.drinks.map((drink)=>(
              <DrinkCard
                key={drink.idDrink}
                drink={drink}
              />
            ))
          }
        </div>
      ):(
        <><p className='my-10 text-center text-2xl'>No hay resultados aún , utiliza el formulario</p> </>
      )}
    </>
  )
}
// import { useState, useMemo } from 'react';
// import { useAppStore } from '../stores/useAppStore';
// import { DrinkCard } from '../components/DrinkCard';

// const ITEMS_PER_PAGE = 10;

// export const HomePage = () => {
//   const drinks = useAppStore((state) => state.drinks);

//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(drinks.drinks.length / ITEMS_PER_PAGE);

//   const currentDrinks = useMemo(() => {
//     const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//     const endIndex = startIndex + ITEMS_PER_PAGE;
//     return drinks.drinks.slice(startIndex, endIndex);
//   }, [currentPage, drinks]);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <>
//       <h1 className="text-6xl font-extrabold">Recetas</h1>
//       {currentDrinks.length ? (
//         <>
//           {currentDrinks.map((drink) => (
//             <DrinkCard key={drink.idDrink} drink={drink} />
//           ))}
//           <div className="pagination">
//             <button onClick={handlePrevPage} disabled={currentPage === 1}>
//               Anterior
//             </button>

//             {Array.from({ length: totalPages }, (_, index) => (
//               <button
//                 key={index + 1}
//                 onClick={() => setCurrentPage(index + 1)}
//                 className={currentPage === index + 1 ? 'active' : ''}
//               >
//                 {index + 1}
//               </button>
//             ))}

//             <button onClick={handleNextPage} disabled={currentPage === totalPages}>
//               Siguiente
//             </button>
//           </div>
//         </>
//       ) : (
//         <p className="my-10 text-center text-2xl">
//           No hay resultados aún, utiliza el formulario.
//         </p>
//       )}
//     </>
//   );
// };