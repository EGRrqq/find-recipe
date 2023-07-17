export async function getRecipesBySearch(searchQuerry: string) {
    const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.NEXT_PUBLIC_APP_ID}&app_key=${process.env.NEXT_PUBLIC_APP_KEY}&q=${searchQuerry}`) 

    if (!res.ok) throw new Error('no recipes, sadge')

    return res.json()
}