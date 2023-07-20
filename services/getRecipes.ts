import { RecipeSearchSchema } from "@/types"
import { ZodError } from "zod"

const baseLink = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.NEXT_PUBLIC_APP_ID}&app_key=${process.env.NEXT_PUBLIC_APP_KEY}`

export async function getRecipesBySearch(path: string) {
    try {
        const result = await fetch(`${baseLink}${path}`).then(res => res.json())

        // console.log('result', result)
        // const fetchRecipes = RecipeSearchSchema.parseAsync(result)
        // console.log('fetchRecipes', fetchRecipes)

        return result
    } catch (error) {
        // if (error instanceof ZodError) {
        //     console.log(error.issues);
        // }

        throw error
    }
}