var getBestHeroPlayerRank = async () => {

    let heroid = heroToId(prompt(`Hero to check?`))

    return await fetch(`https://api.opendota.com/api/rankings?hero_id=${heroid}`)
        .then(ans => ans.json())
        .then(ans => fetch(`https://api.opendota.com/api/players/${ans.rankings[0].account_id}`))
        .then(ans => ans.json())
        .then(playerInfoJson => {

            console.log(playerInfoJson)

            var maindiv = document.createElement('div')
            document.body.appendChild(maindiv)
            maindiv.setAttribute('id', 'maindiv')

            if (playerInfoJson.profile.plus) document.getElementById('plusicon').style.display = 'block'

            var a = document.createElement('a')
            maindiv.appendChild(a)
            a.setAttribute('id', 'aAvatarImage')
            a.href = playerInfoJson.profile.profileurl

            var img = document.createElement('img')
            a.appendChild(img)
            img.setAttribute('id', 'avatarImage')
            img.src = playerInfoJson.profile.avatarfull

            var name = document.createElement('h4')
            maindiv.appendChild(name)
            name.setAttribute('id', 'playerName')
            name.innerHTML = `Nickname: ${playerInfoJson.profile.personaname}`

            var rank = document.createElement('p')
            maindiv.appendChild(rank)
            rank.setAttribute('id', 'playerRank')
            rank.innerHTML = `Rank: ${playerInfoJson.leaderboard_rank}`
        })
        .catch(err => console.log(err))
}

var heroToId = hero => {

    hero = hero.replace(/ /g, '').toLowerCase()

    switch (hero) {
        case 'am':
        case 'anti-mage':
        case 'antimage':
            return 1
        case 'axe':
            return 2
        case 'bane':
            return 3
        case 'bs':
        case 'bloodseeker':
            return 4
        case 'cm':
        case 'crystalmaiden':
            return 5
        case 'dr':
        case 'drowranger':
            return 6
        case 'earthshaker':
        case 'shaker':
            return 7
        case 'jugger':
        case 'juggernaut':
            return 8
        case 'mirana':
        case 'potm':
            return 9
        case 'morph':
        case 'morphling':
            return 10
        case 'sf':
        case 'shadowfiend':
            return 11
        case 'pl':
        case 'phantomlancer':
            return 12
        case 'puck':
            return 13
        case 'pudge':
            return 14
        case 'razor':
            return 15
        case 'sk':
        case 'sandking':
            return 16
        case 'storm':
        case 'stormspirit':
            return 17
        case 'sven':
            return 18
        case 'tiny':
            return 19
        case 'vengefulspirit':
            return 20
        case 'wr':
        case 'windranger':
            return 21
        case 'zeus':
            return 22
        case 'kunkka':
            return 23
        case 'lina':
            return 25
        case 'lion':
            return 26
        case 'shadowshaman':
            return 27
        case 'slardar':
            return 28
        case 'th':
        case 'tidehunter':
            return 29
        case 'wd':
        case 'witchdoctor':
            return 30
        case 'lich':
            return 31
        case 'riki':
            return 32
        case 'enigma':
            return 33
        case 'tinker':
            return 34
        case 'sniper':
            return 35
        case 'necro':
        case 'necrophos':
            return 36
        case 'warlock':
            return 37
        case 'beastmaster':
            return 38
        case 'qop':
        case 'queenofpain':
            return 39
        case 'veno':
        case 'venomancer':
            return 40
        case 'fv':
        case 'facelessvoid':
            return 41
        case 'wk':
        case 'wraithking':
            return 42
        case 'dp':
        case 'deathprophet':
            return 43
        case 'pa':
        case 'phantomassassin':
            return 44
        case 'pugna':
            return 45
        case 'ta':
        case 'templarassassin':
            return 46
        case 'viper':
            return 47
        case 'luna':
            return 48
        case 'dk':
        case 'dragonknight':
            return 49
        case 'dazzle':
            return 50
        case 'clock':
        case 'clockwerk':
            return 51
        case 'leshrac':
            return 52
        case 'furion':
        case 'naturesprophet':
        case "nature'sprophet":
            return 53
        case 'ls':
        case 'lifestealer':
            return 54
        case 'ds':
        case 'darkseer':
            return 55
        case 'clinkz':
            return 56
        case 'omni':
        case 'omniknight':
            return 57
        case 'ench':
        case 'enchantress':
            return 58
        case 'huskar':
            return 59
        case 'nightstalker':
        case 'ns':
            return 60
        case 'brood':
        case 'broodmother':
            return 61
        case 'bh':
        case 'bountyhunter':
            return 62
        case 'weaver':
            return 63
        case 'jakiro':
            return 64
        case 'batrider':
            return 65
        case 'chen':
            return 66
        case 'spectre':
            return 67
        case 'aa':
        case 'ancientapparition':
            return 68
        case 'doom':
            return 69
        case 'ursa':
            return 70
        case 'sb':
        case 'spiritbreaker':
            return 71
        case 'gyro':
        case 'gyrocopter':
            return 72
        case 'alch':
        case 'alchemist':
            return 73
        case 'voker':
        case 'invoker':
            return 74
        case 'silencer':
            return 75
        case 'od':
        case 'outworlddevourer':
        case 'outworlddestroyer':
            return 76
        case 'lycan':
            return 77
        case 'brew':
        case 'brewmaster':
            return 78
        case 'sd':
        case 'shadowdemon':    
            return 79
        case 'ld':
        case 'lonedruid':
            return 80
        case 'ck':
        case 'chaosknight':
            return 81
        case 'meepo':
            return 82
        case 'tp':
        case 'treantprotector':
            return 83
        case 'ogre':
        case 'ogremagi':
            return 84
        case 'undying':
        case 'zombie':
            return 85
        case 'rubick':
            return 86
        case 'disruptor':
            return 87
        case 'nyx':
            return 88
        case 'naga':
        case 'nagasiren':
            return 89
        case 'kotl':
        case 'keeperofthelight':
            return 90
        case 'io':
        case 'wisp':
            return 91
        case 'visage':
            return 92
        case 'slark':
            return 93
        case 'dusa':
        case 'medusa':
            return 94
        case 'troll':
        case 'trollwarlord':
            return 95
        case 'cw':
        case 'centaur':
        case 'centaurwarrunner':
            return 96
        case 'magnus':
            return 97
        case 'timber':
        case 'timbersaw':
            return 98
        case 'bb':
        case 'bristleback':
            return 99
        case 'tusk':
            return 100
        case 'skymage':
        case 'skywrathmage':
            return 101
        case 'abaddon':
            return 102
        case 'elder':
        case 'eldertitan':
            return 103
        case 'lc':
        case 'legioncommander':
            return 104
        case 'techies':
            return 105
        case 'es':
        case 'ember':
        case 'emberspirit':
            return 106
        case 'earth':
        case 'earthspirit':
            return 107
        case 'underlord':
        case 'pitlord':
            return 108
        case 'tb':
        case 'terrorblade':
            return 109
        case 'phoenix':
            return 110
        case 'oracle':
            return 111
        case 'ww':
        case 'winterwyvern':
            return 112
        case 'arc':
        case 'arcwarden':
            return 113
        case 'mk':
        case 'monkeyking':
            return 114
        case 'dw':
        case 'darkwillow':
            return 119
        case 'pango':
        case 'pangolier':
            return 120
        case 'grim':
        case 'grimstroke':
            return 121
        case 'hoodwink':
            return 123
        case 'vs':
        case 'voidspirit':
            return 126
        case 'snap':
        case 'snapfire':
            return 128
        case 'mars':
            return 129
        case 'db':
        case 'dawnbreaker':
            return 135
        case 'marci':
            return 136
        case 'pb':
        case 'beast':
        case 'primalbeast':
            return 137
    }
}