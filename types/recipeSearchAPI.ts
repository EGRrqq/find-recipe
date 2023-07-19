import { z } from "zod"

export type IRecipeSearch = z.infer<typeof RecipeSearchSchema>

const linksSchema = z.object({
    href: z.string(),
    title: z.string(),
})

const recipeSchema = z.object({
    recipe: z.object({
        uri: z.string(),
        label: z.string(),
        image: z.string(),
        images: z.object({
            THUMBNAIL: z.object({
                url: z.string(),
                width: z.number(),
                height: z.number()
            }),
            SMALL: z.object({
                url: z.string(),
                width: z.number(),
                height: z.number()
            }),
            REGULAR: z.object({
                url: z.string(),
                width: z.number(),
                height: z.number()
            }),
            LARGE: z.object({
                url: z.string(),
                width: z.number(),
                height: z.number()
            }),
        }),
        source: z.string(),
        url: z.string(),
        shareAs: z.string(),
        yield: z.number(),
        dietLabels: z.array(z.string()),
        healthLabels: z.array(z.string()),
        cautions: z.array(z.string()),
        ingredientLines: z.array(z.string()),
        ingredients: z.array(z.object({
            text: z.string(),
            quantity: z.number(),
            measure: z.string(),
            food: z.string(),
            weight: z.number(),
            foodId: z.string(),
        })),
        calories: z.number(),
        glycemicIndex: z.number(),
        totalCO2Emissions: z.number(),
        co2EmissionsClass: z.string(),
        totalTime: z.number(),
        totalWeight: z.number(),
        cuisineType: z.array(z.string()),
        mealType: z.array(z.string()),
        dishType: z.array(z.string()),
        instructions: z.array(z.string()),
        tags: z.array(z.string()),
        externalId: z.string(),
        totalNutrients: z.object({}),
        totalDaily: z.object({}),
        digest: z.array(z.object({
            label: z.string(),
            tag: z.string(),
            schemaOrgTag: z.string(),
            total: z.number(),
            hasRDI: z.boolean(),
            daily: z.number(),
            unit: z.string(),
            sub: z.object({}),
        }))
    }),

    _links: z.object({
        self: linksSchema
    })
})

export const RecipeSearchSchema = z.object({
    from: z.number(),
    to: z.number(),
    count: z.number(),
    _links: z.object({
        next: linksSchema.optional()
    }),
    hits: z.array(recipeSchema),
})