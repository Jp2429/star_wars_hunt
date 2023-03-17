use star_wars
db.dropDatabase()

db.enemies.insertMany([
    {
        name:"Thug",
        health:150,
        level:1,
        weapon:{
            name:"DH-17 Blaster Pistol",
            damage:25,
            chance_to_hit:45,
        },
        armour:{
            name:"Fatigues",
            defense:0
        }
    },
    {
        name:"Thug",
        health:150,
        level:1,
        weapon:{
            name:"DH-17 Blaster Pistol",
            damage:25,
            chance_to_hit:45,
        },
        armour:{
            name:"Fatigues",
            defense:0
        }
    },
    {
        name:"Thug Elite",
        health:150,
        level:1,
        weapon:{
            name:"A280 Blaster Rifle",
            damage:35,
            chance_to_hit:55,
        },
        armour:{
            name:"Leather Fatigues",
            defense:5
        }
    },
    {
        name:"Thug",
        health:150,
        level:1,
        weapon:{
            name:"DH-17 Blaster Pistol",
            damage:25,
            chance_to_hit:45,
        },
        armour:{
            name:"Fatigues",
            defense:0
        }
    },
    {
        name:"Black Sun Gangster",
        health:250,
        level:5,
        weapon:{
            name:"DL-44 Heavy Blaster Pistol",
            damage:40,
            chance_to_hit:55,
        },
        armour:{
            name:"Black Sun Uniform",
            defense:10
        }
    },
    {
        name:"Black Sun Gangster",
        health:250,
        level:5,
        weapon:{
            name:"DL-44 Heavy Blaster Pistol",
            damage:40,
            chance_to_hit:55,
        },
        armour:{
            name:"Black Sun Uniform",
            defense:10
        }
    },
    {
        name:"Black Sun Gangster",
        health:250,
        level:5,
        weapon:{
            name:"DL-44 Heavy Blaster Pistol",
            damage:40,
            chance_to_hit:55,
        },
        armour:{
            name:"Black Sun Uniform",
            defense:10
        }
    },
    {
        name:"Black Sun Captain",
        health:300,
        level:5,
        weapon:{
            name:"Black Sun Blaster Rifle",
            damage:50,
            chance_to_hit:60,
        },
        armour:{
            name:"Black Sun Armour",
            defense:15
        }
    },
    {
        name:"Stormtrooper",
        health:450,
        level:10,
        weapon:{
            name:"E-11 Blaster Rifle",
            damage:60,
            chance_to_hit:55,
        },
        armour:{
            name:"Plastoid Armour",
            defense:20
        }
    },
    {
        name:"Stormtrooper",
        health:450,
        level:10,
        weapon:{
            name:"E-11 Blaster Rifle",
            damage:60,
            chance_to_hit:55,
        },
        armour:{
            name:"Plastoid Armour",
            defense:20
        }
    },
    {
        name:"Stormtrooper",
        health:450,
        level:10,
        weapon:{
            name:"E-11 Blaster Rifle",
            damage:60,
            chance_to_hit:55,
        },
        armour:{
            name:"Plastoid Armour",
            defense:20
        }
    },
    {
        name:"Imperial Officer",
        health:500,
        level:10,
        weapon:{
            name:"SE-14r Light Repeating Blaster",
            damage:65,
            chance_to_hit:55,
        },
        armour:{
            name:"Officers Uniform",
            defense:20
        }
    },
    {
        name:"Wookie Warrior",
        health:600,
        level:15,
        weapon:{
            name:"Wookie Long Gun",
            damage:70,
            chance_to_hit:55,
        },
        armour:{
            name:"Battle Harness",
            defense:25
        }
    },
    {
        name:"Wookie Warrior",
        health:600,
        level:15,
        weapon:{
            name:"Wookie Long Gun",
            damage:70,
            chance_to_hit:55,
        },
        armour:{
            name:"Battle Harness",
            defense:25
        }
    },
    {
        name:"Wookie Warrior",
        health:600,
        level:15,
        weapon:{
            name:"Wookie Long Gun",
            damage:70,
            chance_to_hit:55,
        },
        armour:{
            name:"Battle Harness",
            defense:25
        }
    },
    {
        name:"Wookie Chieftan",
        health:650,
        level:15,
        weapon:{
            name:"Bowcaster",
            damage:80,
            chance_to_hit:55,
        },
        armour:{
            name:"Battle Harness",
            defense:25
        }
    }
])


db.bounty_hunters.insertMany([
    {
        name:"Dash Halcyon",
        species:"Human",
        health:250,
        action_points:20,
        credits:1500,
        level:1,
        xp_to_level_up:100,
        cur_xp:0,
        is_player:false,
        stim_count:0,
        weapon:{
            name:"DH-17 Blaster Pistol",
            damage:25,
            chance_to_hit:55,
            cost:550,
            ability:"Flurry"
        },
        armour:{
            name:"Fatigues",
            cost:250,
            defense:0
        }
    },
    {
        name:"Rix Terrik",
        species:"Human",
        health:375,
        action_points:20,
        credits:2500,
        level:5,
        xp_to_level_up:250,
        cur_xp:0,
        is_player:false,
        stim_count:0,
        weapon:{
            name:"DL-44 Heavy Blaster Pistol",
            damage:40,
            chance_to_hit:60,
            cost:750,
            ability:"Flurry"
        },
        armour:{
            name:"Bounty Hunter Armour",
            cost:550,
            defense:10
        }
    },
    {
        name:"Chikoob Bomu",
        species:"Rodian",
        health:500,
        action_points:20,
        credits:4000,
        level:10,
        xp_to_level_up:400,
        cur_xp:0,
        is_player:false,
        stim_count:0,
        weapon:{
            name:"IB-94",
            damage:55,
            chance_to_hit:60,
            cost:1000,
            ability:"Flurry"
        },
        armour:{
            name:"Durasteel Armour",
            cost:750,
            defense:15
        }
    },
    {
        name:"Do'seca",
        species:"Twi'lek",
        health:250,
        action_points:20,
        credits:1500,
        level:1,
        xp_to_level_up:100,
        cur_xp:0,
        is_player:false,
        stim_count:0,
        weapon:{
            name:"A280 Blaster Rifle",
            damage:35,
            chance_to_hit:55,
            cost:550,
            ability:"Burst"
        },
        armour:{
            name:"Fatigues",
            cost:250,
            defense:0
        }
    },
    {
        name:"Cadan Keeg",
        species:"Duros",
        health:375,
        action_points:20,
        credits:2500,
        level:5,
        xp_to_level_up:250,
        cur_xp:0,
        is_player:false,
        stim_count:0,
        weapon:{
            name:"EE-3 Carbine Rifle",
            damage:45,
            chance_to_hit:60,
            cost:750,
            ability:"Burst"
        },
        armour:{
            name:"Bounty Hunter Armour",
            cost:550,
            defense:10
        }
    },
    {
        name:"Pekt",
        species:"Trandoshan",
        health:500,
        action_points:20,
        credits:4000,
        level:10,
        xp_to_level_up:400,
        cur_xp:0,
        is_player:false,
        stim_count:0,
        weapon:{
            name:"AR-1 Blaster Rifle",
            damage:60,
            chance_to_hit:60,
            cost:1000,
            ability:"Burst"
        },
        armour:{
            name:"Durasteel Armour",
            cost:750,
            defense:20
        }
    },
    {
        name:"Reine Dara",
        species:"Human",
        health:150,
        action_points:20,
        credits:1500,
        level:1,
        xp_to_level_up:100,
        cur_xp:0,
        is_player:false,
        stim_count:0,
        weapon:{
            name:"IQA-11 Blaster Rifle",
            damage:55,
            chance_to_hit:75,
            cost:550,
            ability:"Snipe"
        },
        armour:{
            name:"Fatigues",
            cost:250,
            defense:0
        }
    },
    {
        name:"Kenneth Darwin",
        species:"Human",
        health:275,
        action_points:20,
        credits:2500,
        level:5,
        xp_to_level_up:250,
        cur_xp:0,
        is_player:false,
        stim_count:0,
        weapon:{
            name:"Valkan-38x",
            damage:65,
            chance_to_hit:80,
            cost:750,
            ability:"Snipe"
        },
        armour:{
            name:"Ranged Armour",
            cost:550,
            defense:5
        }
    },
    {
        name:"HK-47",
        species:"Droid",
        health:500,
        action_points:20,
        credits:5000,
        level:10,
        xp_to_level_up:100,
        cur_xp:0,
        is_player:false,
        stim_count:0,
        weapon:{
            name:" HK-47s Scoped Assassinator",
            damage:90,
            chance_to_hit:85,
            cost:1000,
            ability:"Snipe"
        },
        armour:{
            name:"Durasteel Plating",
            cost:750,
            defense:20
        }
    }
])
db.store_weapons.insertMany([
    {
        weapon:{
            name:"WESTAR-34 Blaster Pistol",
            damage:40,
            chance_to_hit:60,
            cost:1500,
            ability:"Flurry"
        }
        
    },
    {
        weapon:{
            name:"Beryars MK-3 Pistol",
            damage:60,
            chance_to_hit:60,
            cost:5000,
            ability:"Flurry"
        }
        
    },
    {
        weapon:{
            name:"Black Nebula Heavy Blaster",
            damage:75,
            chance_to_hit:70,
            cost:7000,
            ability:"Flurry"
        }
        
    },
    {
        weapon:{
            name:"CD-35 Blaster Rifle",
            damage:50,
            chance_to_hit:60,
            cost:2000,
            ability:"Burst"
        }
        
    },
    {
        weapon:{
            name:"Corellian K5 Blaster Rifle",
            damage:65,
            chance_to_hit:65,
            cost:5500,
            ability:"Burst"
        }
        
    },
    {
        weapon:{
            name:"DLA-13 Heavy Blaster Rifle",
            damage:85,
            chance_to_hit:50,
            cost:7500,
            ability:"Burst"
        }
        
    },
    {
        weapon:{
            name:"Beryars MK-3 Sniper Rifle",
            damage:70,
            chance_to_hit:70,
            cost:2500,
            ability:"Snipe"
        }
        
    },
    {
        weapon:{
            name:"Firestorm HZ-77 Sniper Rifle",
            damage:85,
            chance_to_hit:80,
            cost:6500,
            ability:"Snipe"
        }
        
    },
    {
        weapon:{
            name:"Amban JP Blaster Rifle",
            damage:100,
            chance_to_hit:90,
            cost:10000,
            ability:"Snipe"
        }
        
    }
])
db.store_armours.insertMany([
    {
        armour:{
            name:"Headhunter",
            cost:1000,
            defense:10
        }
        
    },
    {
        armour:{
            name:"Durasteel",
            cost:2500,
            defense:15
        }
        
    },
    {
        armour:{
            name:"Freelance Hunter",
            cost:5000,
            defense:20
        }
        
    },
    {
        armour:{
            name:"Cybernetic Pauldrons",
            cost:7500,
            defense:25
        }
        
    },
    {
        armour:{
            name:"Beskar",
            cost:10000,
            defense:30
        }
        
    }
])

db.store.insertMany([
    {
        weapons:[
            {
                name:"WESTAR-34 Blaster Pistol",
                damage:40,
                chance_to_hit:60,
                cost:1500,
                ability:"Flurry"
            },
            {
                name:"Beryars MK-3 Pistol",
                damage:60,
                chance_to_hit:60,
                cost:5000,
                ability:"Flurry"
            },
            {
                name:"Black Nebula Heavy Blaster",
                damage:75,
                chance_to_hit:70,
                cost:7000,
                ability:"Flurry"
            },
            {
                name:"CD-35 Blaster Rifle",
                damage:50,
                chance_to_hit:60,
                cost:2000,
                ability:"Burst"
            },
            {
                name:"Corellian K5 Blaster Rifle",
                damage:65,
                chance_to_hit:65,
                cost:5500,
                ability:"Burst"
            },
            {
                name:"DLA-13 Heavy Blaster Rifle",
                damage:85,
                chance_to_hit:50,
                cost:7500,
                ability:"Burst"
            },
            {
                name:"Beryars MK-3 Sniper Rifle",
                damage:70,
                chance_to_hit:70,
                cost:2500,
                ability:"Snipe"
            },
            {
                name:"Firestorm HZ-77 Sniper Rifle",
                damage:85,
                chance_to_hit:80,
                cost:6500,
                ability:"Snipe"
            },
            {
                name:"Amban JP Blaster Rifle",
                damage:100,
                chance_to_hit:90,
                cost:10000,
                ability:"Snipe"
            }
        ],
        armours:[
            {
                name:"Headhunter",
                cost:1000,
                defense:10
            },
            {
                name:"Durasteel",
                cost:2500,
                defense:15
            },
            {
                name:"Freelance Hunter",
                cost:5000,
                defense:20
            },
            {
                name:"Cybernetic Pauldrons",
                cost:7500,
                defense:25
            },
            {
                name:"Beskar",
                cost:10000,
                defense:30
            },
        ]
    }
])

