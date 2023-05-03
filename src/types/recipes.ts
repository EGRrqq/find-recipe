export interface IRecipes {
    hits: IHit[]
}

interface IHit {
    recipe: IRecipe
}

interface IRecipe {
    uri: string;
    url: string;
    label: string;
    image: string;
    ingredients: IIngredient[]
}

interface IIngredient {
    text: string;
    quantity: number;
    measure: string;
    food: string;
    weight: number;
    foodId: string;
}

