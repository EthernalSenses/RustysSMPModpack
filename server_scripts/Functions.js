//priority: 1
let energize = (e, ingredient, result, power, count) => {
    e.recipes.powah.energizing({
        ingredients: ingredient.map(i => Ingredient.of(i).toJson()),
        energy: power,
        result: Item.of(result, count ? count : 1).toResultJson()
    }).id(`kubejs:energizing/${result.replace(':', '/')}`)
}