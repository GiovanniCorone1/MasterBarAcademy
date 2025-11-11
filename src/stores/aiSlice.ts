import { StateCreator } from "zustand";
import AiService from "../services/AiService";

export type AISlice = {
    recipe: string;
    generateRecipe: (prompt:string)=>Promise<void>;
}
export const createAISlice : StateCreator<AISlice, [], [], AISlice> =(set)=> ({
    recipe:"",
    generateRecipe: async (prompt:string)=>{
        //llamar al servicio de AI
        const data= await AiService.generateRecipe(prompt);
        for await (const textPart of data) {
            set((state)=>({
                recipe:state.recipe+textPart
            }) );
        }
    }
})