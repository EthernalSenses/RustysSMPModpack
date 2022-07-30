// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
    energize(e, ['#forge:ingots/steel', '#forge:ingots/gold', '#forge:dusts/redstone', '#forge:dusts/glowstone'], 'powah:steel_energized', 20000, 1)
    e.shaped('botania:creative_pool', ['RMR', 'MSM', 'RMR'], {
        S: 'atmadditions:atm_star',
        M: 'botania:mana_pool',
        R: '#botania:runes'
    }).id('kubejs:botania/creative_pool')
})

onEvent('item.tags', event => {
    // Get the #forge:cobblestone tag collection and add Diamond Ore to it
    // event.get('forge:cobblestone').add('minecraft:diamond_ore')

    // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
    // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})