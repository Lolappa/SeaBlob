ServerEvents.recipes( event => {
    const greg = event.recipes.gtceu;

    //Recipe removal

    event.remove({ output: ['minecraft:iron_pickaxe', 'minecraft:iron_axe', 'minecraft:iron_shovel', 'minecraft:iron_hoe', 'minecraft:iron_sword']})
    event.remove({ output: ['minecraft:golden_pickaxe', 'minecraft:golden_axe', 'minecraft:golden_shovel', 'minecraft:golden_hoe', 'minecraft:golden_sword']})
    event.remove({ output: ['minecraft:diamond_pickaxe', 'minecraft:diamond_axe', 'minecraft:diamond_shovel', 'minecraft:diamond_hoe', 'minecraft:diamond_sword']})
    event.remove({ output: ['minecraft:netherite_pickaxe', 'minecraft:netherite_axe', 'minecraft:netherite_shovel', 'minecraft:netherite_hoe', 'minecraft:netherite_sword']})


    //Smelting, Blasting, Smoking, you get the idea
    event.blasting('gtceu:wrought_iron_ingot', 'minecraft:iron_ingot')
    event.smelting('minecraft:glass', 'minecraft:sand')
    

    //Simple GT recipes
    greg.alloy_smelter('giritech:glass_tube')
        .itemInputs('forge:glass')
        .notConsumable('gtceu:ball_casting_mold')
        .itemOutputs('gtceu:glass_tube')
        .duration(240)
        .EUt(16);

    greg.compressor('giritech:rubber_sheets')
        .itemInputs('gtceu:sticky_resin')
        .itemOutputs('gtceu:rubber_plate')
        .duration(160)
        .EUt(4);
})

