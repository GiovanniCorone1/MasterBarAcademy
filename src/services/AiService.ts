import { streamText } from "ai";
import { openrouter } from "../lib/ai";
export default {
    async generateRecipe(prompt: string) {
        const result = streamText({
            model: openrouter("openrouter/polaris-alpha"),
            prompt
        })
        return result.textStream
    }
}