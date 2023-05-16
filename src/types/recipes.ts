export interface IRecipes {
    from: number
    to: number
    count: number
    _links: ILinks
    hits: IHit[]
}

export interface IHit {
    recipe: IRecipe;
}

interface ILinks {
    next: INext;
}

interface INext {
    href: string;
    title: string;
}

interface IRecipe {
    uri: string;
    url: string;
    label: string;
    image: string;
    ingredients: IIngredient[];
    calories: number;
    totalWeight: number;
    source: string;
}

interface IIngredient {
    text: string;
    quantity: number;
    measure: string;
    food: string;
    weight: number;
    foodId: string;
}

