import { z } from "zod"
import { CategoriesAPIResponseSchema, SearchFilterSchema, DrinksAPIResponse, DrinkAPIResponse, RecipeAPIResponseSchema } from '../utils/recipes-schema';
// Utiliza el helper z.infer de Zod para generar automáticamente un tipo TypeScript basado en el esquema. Este tipo representa la estructura de datos validada por el esquema
export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksAPIResponse>
export type Drink = z.infer<typeof DrinkAPIResponse>
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>