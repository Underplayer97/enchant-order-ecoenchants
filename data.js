var data = {
    enchants: {
        /*TEMPLATE
        enchant: {
            levelMax: "1",
            weight: "4",
            incompatible: [],
            items: ["helmet", "chestplate", "leggings", "boots", "elytra", "pumpkin", "helmet", "turtle_shell"]
        },*/


        protection: {
            levelMax: "4",
            weight: "1",
            incompatible: ["blast_protection", "fire_protection", "projectile_protection"],
            items: ["helmet", "chestplate", "leggings", "boots", "turtle_shell"]
        },
        aqua_affinity: {
            levelMax: "1",
            weight: "2",
            incompatible: [],
            items: ["helmet", "turtle_shell"]
        },
        bane_of_arthropods: {
            levelMax: "5",
            weight: "1",
            incompatible: ["smite", "sharpness"],
            items: ["sword", "axe"]
        },
        blast_protection: {
            levelMax: "4",
            weight: "2",
            incompatible: ["fire_protection", "protection", "projectile_protection"],
            items: ["helmet", "chestplate", "leggings", "boots", "turtle_shell"]
        },
        channeling: {
            levelMax: "1",
            weight: "4",
            incompatible: ["riptide"],
            items: ["trident"]
        },
        depth_strider: {
            levelMax: "3",
            weight: "2",
            incompatible: ["frost_walker"],
            items: ["boots"]
        },
        efficiency: {
            levelMax: "5",
            weight: "1",
            incompatible: [],
            items: ["pickaxe", "shovel", "axe", "hoe", "shears"]
        },
        feather_falling: {
            levelMax: "4",
            weight: "1",
            incompatible: [],
            items: ["boots"]
        },
        fire_aspect: {
            levelMax: "2",
            weight: "2",
            incompatible: [],
            items: ["sword"]
        },
        fire_protection: {
            levelMax: "4",
            weight: "1",
            incompatible: ["blast_protection", "protection", "projectile_protection"],
            items: ["helmet", "chestplate", "leggings", "boots", "turtle_shell"]
        },
        flame: {
            levelMax: "1",
            weight: "2",
            incompatible: [],
            items: ["bow"]
        },
        fortune: {
            levelMax: "3",
            weight: "2",
            incompatible: ["silk_touch"],
            items: ["pickaxe", "shovel", "axe", "hoe"]
        },
        frost_walker: {
            levelMax: "2",
            weight: "2",
            incompatible: ["depth_strider"],
            items: ["boots"]
        },
        impaling: {
            levelMax: "5",
            weight: "2",
            incompatible: [],
            items: ["trident"]
        },
        infinity: {
            levelMax: "1",
            weight: "4",
            incompatible: ["mending"],
            items: ["bow"]
        },
        knockback: {
            levelMax: "2",
            weight: "1",
            incompatible: [],
            items: ["sword"]
        },
        looting: {
            levelMax: "3",
            weight: "2",
            incompatible: [],
            items: ["sword"]
        },
        loyalty: {
            levelMax: "3",
            weight: "1",
            incompatible: ["riptide"],
            items: ["trident"]
        },
        luck_of_the_sea: {
            levelMax: "3",
            weight: "2",
            incompatible: [],
            items: ["fishing_rod"]
        },
        lure: {
            levelMax: "3",
            weight: "2",
            incompatible: [],
            items: ["fishing_rod"]
        },
        mending: {
            levelMax: "1",
            weight: "2",
            incompatible: ["infinity"],
            items: ["helmet", "chestplate", "leggings", "boots", "pickaxe", "shovel", "axe", "sword", "hoe", "brush", "fishing_rod",
                "bow", "shears", "flint_and_steel", "carrot_on_a_stick", "warped_fungus_on_a_stick", "shield", "elytra", "trident",
                "turtle_shell", "crossbow"
            ]
        },
        multishot: {
            levelMax: "1",
            weight: "2",
            incompatible: ["piercing"],
            items: ["crossbow"]
        },
        piercing: {
            levelMax: "4",
            weight: "1",
            incompatible: ["multishot"],
            items: ["crossbow"]
        },
        power: {
            levelMax: "5",
            weight: "1",
            incompatible: [],
            items: ["bow"]
        },
        projectile_protection: {
            levelMax: "4",
            weight: "1",
            incompatible: ["protection", "blast_protection", "fire_protection"],
            items: ["helmet", "chestplate", "leggings", "boots", "turtle_shell"]
        },
        punch: {
            levelMax: "2",
            weight: "2",
            incompatible: [],
            items: ["bow"]
        },
        quick_charge: {
            levelMax: "3",
            weight: "1",
            incompatible: [],
            items: ["crossbow"]
        },
        respiration: {
            levelMax: "3",
            weight: "2",
            incompatible: [],
            items: ["helmet", "turtle_shell"]
        },
        riptide: {
            levelMax: "3",
            weight: "2",
            incompatible: ["channeling", "loyalty"],
            items: ["trident"]
        },
        sharpness: {
            levelMax: "5",
            weight: "1",
            incompatible: ["bane_of_arthropods", "smite"],
            items: ["sword", "axe"]
        },
        silk_touch: {
            levelMax: "1",
            weight: "4",
            incompatible: ["fortune"],
            items: ["pickaxe", "shovel", "axe", "hoe"]
        },
        smite: {
            levelMax: "5",
            weight: "1",
            incompatible: ["bane_of_arthropods", "sharpness"],
            items: ["sword", "axe"]
        },
        soul_speed: {
            levelMax: "3",
            weight: "4",
            incompatible: [],
            items: ["boots"]
        },
        sweeping: {
            levelMax: "3",
            weight: "2",
            incompatible: [],
            items: ["sword"]
        },
        swift_sneak: {
            levelMax: "3",
            weight: "4",
            incompatible: [],
            items: ["leggings"]
        },
        thorns: {
            levelMax: "3",
            weight: "4",
            incompatible: [],
            items: ["helmet", "chestplate", "leggings", "boots", "turtle_shell"]
        },
        unbreaking: {
            levelMax: "3",
            weight: "1",
            incompatible: [],
            weight: "1",
            items: ["helmet", "chestplate", "leggings", "boots", "pickaxe", "shovel", "axe", "sword", "hoe", "brush", "fishing_rod",
                "bow", "shears", "flint_and_steel", "carrot_on_a_stick", "warped_fungus_on_a_stick", "shield", "elytra", "trident",
                "turtle_shell", "crossbow"
            ]
        },
        binding_curse: {
            levelMax: "1",
            weight: "4",
            incompatible: [],
            items: ["helmet", "chestplate", "leggings", "boots", "elytra", "pumpkin", "helmet", "turtle_shell"]
        },
        vanishing_curse: {
            levelMax: "1",
            weight: "4",
            incompatible: [],
            items: ["helmet", "chestplate", "leggings", "boots", "pickaxe", "shovel", "axe", "sword", "hoe", "brush", "fishing_rod",
                "bow", "shears", "flint_and_steel", "carrot_on_a_stick", "warped_fungus_on_a_stick", "shield", "elytra", "pumpkin",
                "helmet", "trident", "turtle_shell", "crossbow"
            ]
        },

        //Eco Enchants List

        abrasion: {
            levelMax: "2",
            weight: "1",
            incompatible: [],
            items: ["sword","axe"]
        },
        
        adrenaline: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["shield"]
        },
        
        arcane_defence: {
            levelMax: "5",
            weight: "1",
            incompatible: [],
            items: ["helmet", "chestplate", "leggings", "boots","turtle_shell"]
        },

        ascend: {
            levelMax: "2",
            weight: "1",
            incompatible: [],
            items: ["sword"]
        },
        
        aura: {
            levelMax: "2",
            weight: "1",
            incompatible: [],
            items: ["chestplate","leggings"]
        },
        
        blackout: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["sword"]
        },

        blast_mining: {
            levelMax: "3",
            weight: "1",
            incompatible: ["veinminer"],
            items: ["pickaxe"]
        },

        bleed: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["sword"]
        },

        block_breather: {
            levelMax: "3",
            weight: "1",
            incompatible: [],
            items: ["helmet"]
        },

        boss_hunter: {
            levelMax: "3",
            weight: "1",
            incompatible: [],
            items: ["bow","crossbow"]
        },

        breaklessness_curse: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["hoe","axe","shovel","pickaxe"]
        },

        brightness: {
            levelMax: "5",
            weight: "1",
            incompatible: ["smite","sharpness","bane_of_arthropods","introversion","slaughter"],
            items: ["sword"]
        },

        caffeinated: {
            levelMax: "3",
            weight: "1",
            incompatible: [],
            items: ["sword"]
        },

        carve: {
            levelMax: "3",
            weight: "1",
            incompatible: [],
            items: ["axe"]
        },

        charge: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["sword"]
        },

        confusion: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["sword"]
        },

        contagion: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["trident"]
        },

        criticals: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["sword","axe"]
        },

        cubism: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["sword","axe","bow","crossbow"]
        },
        
        dexterity: {
            levelMax: "2",
            weight: "1",
            incompatible: [],
            items: ["sword","axe"]
        },

        dynamite: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["pickaxe"]
        },

        end_affinity: {
            levelMax: "3",
            weight: "1",
            incompatible: [],
            items: ["sword","bow","trident"]
        },

        ender_slayer: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["sword","axe"]
        },

        escape: {
            levelMax: "2",
            weight: "1",
            incompatible: ["streamlining"],
            items: ["boots"]
        },

        excavation: {
            levelMax: "3",
            weight: "1",
            incompatible: [],
            items: ["shovel"]
        },

        feather_step: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["boots"]
        },

        finishing: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["sword","axe"]
        },

        first_strike: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["sword","axe"]
        },

        flashbang: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["crossbow","bow"]
        },

        foraging: {
            levelMax: "3",
            weight: "1",
            incompatible: [],
            items: ["shears"]
        },

        fortitude: {
            levelMax: "2",
            weight: "1",
            incompatible: [],
            items: ["helmet","chestplate","leggings","boots"]
        },

        frost: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["bow"]
        },

        getaway: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["boots"]
        },

        goliath: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["sword"]
        },

        harmlessness_curse: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["sword","axe"]
        },

        haunting: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["helmet"]
        },

        hunger_curse: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["helmet"]
        },

        infernal_touch: {
            levelMax: "1",
            weight: "1",
            incompatible: ["silk_touch"],
            items: ["pickaxe"]
        },

        introversion: {
            levelMax: "5",
            weight: "1",
            incompatible: ["sharpness","smite","bane_of_arthropods","slaughter","brightness"],
            items: ["sword"]
        },

        jumpshot: {
            levelMax: "3",
            weight: "1",
            incompatible: [],
            items: ["bow","crossbow"]
        },

        lifesteal: {
            levelMax: "3",
            weight: "1",
            incompatible: [],
            items: ["sword"]
        },

        lumberjack: {
            levelMax: "5",
            weight: "1",
            incompatible: [],
            items: ["axe"]
        },

        metabolism: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["chestplate"]
        },

        misfortune_curse: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["hoe,shovel,pickaxe,axe"]
        },

        nether_affinity: {
            levelMax: "5",
            weight: "1",
            incompatible: ["end_affinity"],
            items: ["sword,bow,trident"]
        },

        nether_prospector: {
            levelMax: "1",
            weight: "1",
            incompatible: ["fortune","silk_touch"],
            items: ["pickaxe"]
        },

        ninja: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["sword"]
        },

        permanence_curse: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["helmet","chestplate","leggings","boots","turtle_shell","elytra","sword","axe","trident","pickaxe","shovel","hoe","bow","shield","crossbow","brush","fishing_rod","shears","flint_and_steel","carrot_on_a_stick","warped_fungus_on_a_stick","pumpkin","book"]
        },

        poison_ivy: {
            levelMax: "2",
            weight: "1",
            incompatible: ["thorns"],
            items: ["leggings"]
        },

        rapid: {
            levelMax: "5",
            weight: "1",
            incompatible: [],
            items: ["bow"]
        },

        rebounding: {
            levelMax: "3",
            weight: "1",
            incompatible: [],
            items: ["shield"]
        },

        repairing: {
            levelMax: "3",
            weight: "1",
            incompatible: ["mending"],
            items: ["helmet","chestplate","leggings","boots","turtle_shell","elytra","sword","axe","trident","pickaxe","shovel","hoe","bow","shield","crossbow","brush","fishing_rod","shears","flint_and_steel","carrot_on_a_stick","warped_fungus_on_a_stick"]
        },

        replenish: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["hoe"]
        },

        rocket_saver: {
            levelMax: "3",
            weight: "1",
            incompatible: [],
            items: ["elytra"]
        },

        rumble: {
            levelMax: "3",
            weight: "1",
            incompatible: [],
            items: ["sword"]
        },

        shulker_harvest: {
            levelMax: "3",
            weight: "1",
            incompatible: ["looting"],
            items: ["sword"]
        },

        shura: {
            levelMax: "2",
            weight: "1",
            incompatible: ["looting"],
            items: ["axe"]
        },

        skull_puncture: {
            levelMax: "3",
            weight: "1",
            incompatible: [],
            items: ["bow","trident","crossbow"]
        },

        slaughter: {
            levelMax: "5",
            weight: "1",
            incompatible: ["sharpness","smite","bane_of_arthropods","introversion","brightness"],
            items: ["sword"]
        },

        slipstream: {
            levelMax: "3",
            weight: "1",
            incompatible: [],
            items: ["trident"]
        },

        snipe: {
            levelMax: "3",
            weight: "1",
            incompatible: [],
            items: ["bow","crossbow"]
        },

        soul_storm: {
            levelMax: "2",
            weight: "1",
            incompatible: [],
            items: ["sword"]
        },

        soulbound: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["helmet","chestplate","leggings","boots","turtle_shell","elytra","sword","axe","trident","pickaxe","shovel","hoe","bow","shield","crossbow","brush","fishing_rod","shears","flint_and_steel","carrot_on_a_stick","warped_fungus_on_a_stick","pumpkin"]
        },

        sparks: {
            levelMax: "5",
            weight: "1",
            incompatible: [],
            items: ["fishing_rod"]
        },

        stamina: {
            levelMax: "3",
            weight: "1",
            incompatible: [],
            items: ["chestplate"]
        },

        streamlining: {
            levelMax: "3",
            weight: "1",
            incompatible: [],
            items: ["boots"]
        },

        stun: {
            levelMax: "3",
            weight: "1",
            incompatible: [],
            items: ["sword","crossbow","bow","trident"]
        },

        telekinesis: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["sword","pickaxe","axe"]
        },

        thor: {
            levelMax: "5",
            weight: "1",
            incompatible: [],
            items: ["bow","crossbow"]
        },

        thrive: {
            levelMax: "4",
            weight: "1",
            incompatible: [],
            items: ["helmet","chestplate","leggings","boots"]
        },

        transmission: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["sword"]
        },

        tripleshot: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["bow"]
        },
        
        vanish: {
            levelMax: "2",
            weight: "1",
            incompatible: [],
            items: ["helmet","chestplate","leggings","boots"]
        },

        veinminer: {
            levelMax: "3",
            weight: "1",
            incompatible: ["blast_mining"],
            items: ["pickaxe"]
        },

        vitality: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["sword","axe","pickaxe","shovel"]
        },

        warp_drive: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["bow"]
        },

        wisdom: {
            levelMax: "3",
            weight: "1",
            incompatible: [],
            items: ["sword","axe","bow","crossbow","shovel","trident","pickaxe","hoe"]
        },

        wound: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["bow","crossbow"]
        },

        wyvern: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["elytra"]
        },

        xray: {
            levelMax: "3",
            weight: "1",
            incompatible: [],
            items: ["pickaxe"]
        },
    
    },
    items: [
        'helmet',
        'chestplate',
        'leggings',
        'boots',
        'turtle_shell',
        'elytra',

        'sword',
        'axe',
        'trident',
        'pickaxe',
        'shovel',
        'hoe',
        'bow',
        'shield',
        'crossbow',
        'brush',

        'fishing_rod',
        'shears',
        'flint_and_steel',
        'carrot_on_a_stick',
        'warped_fungus_on_a_stick',
        'pumpkin',
        'book',
    ]
};
