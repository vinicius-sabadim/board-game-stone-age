const players = []

export function addPlayer(player) {
  players.push(Object.assign(players, {
    id: players.length + 1,
    score: 0,
    people: 5,
    foodGenerate: 0,
    resource: {
      food: 0,
      wood: 0,
      brick: 0,
      stone: 0,
      gold: 0
    }
  }))
}

export default players
