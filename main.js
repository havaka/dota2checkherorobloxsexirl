var getBestHeroPlayerRank = async () => {

    let heroid = prompt(`Hero id to check?`, '74')

    return await fetch(`https://api.opendota.com/api/rankings?hero_id=${heroid}`)
        .then(ans => ans.json())
        .then(ans => fetch(`https://api.opendota.com/api/players/${ans.rankings[0].account_id}`))
        .then(ans => ans.json())
        .then(playerInfoJson => {

            console.log(playerInfoJson)
            
            let maindiv = document.createElement('div')
            document.body.appendChild(maindiv)
            maindiv.setAttribute('id', 'maindiv')

            if (playerInfoJson.profile.plus) document.getElementById('plusicon').style.display = 'block'

            let a = document.createElement('a')
            maindiv.appendChild(a)
            a.setAttribute('id', 'aAvatarImage')
            a.href = playerInfoJson.profile.profileurl

            let img = document.createElement('img')
            a.appendChild(img)
            img.setAttribute('id', 'avatarImage')
            img.src = playerInfoJson.profile.avatarfull

            let name = document.createElement('h4')
            maindiv.appendChild(name)
            name.setAttribute('id', 'playerName')
            name.innerHTML = `Nickname: ${playerInfoJson.profile.personaname}`

            let rank = document.createElement('p')
            maindiv.appendChild(rank)
            rank.setAttribute('id', 'playerRank')
            rank.innerHTML = `Rank: ${playerInfoJson.leaderboard_rank}`
        })
        .catch(err => console.log(err))
}