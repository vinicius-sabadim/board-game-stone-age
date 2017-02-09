import building from './cards/building'
import civilization from './cards/civilization'

let game = {
  players: [],
  resource: {
    wood: 30,
    brick: 30,
    stone: 30,
    gold: 30
  },
  civilizationCards: civilization,
  activeCivilizationCards: 0,
  buildingCards: building
}

export function drawCivilizationCards(cards = 4) {
  let { civilizationCards } = game
  let count = 0
  while (count < 4) {
    let index = generateIndex()
    if (!civilizationCards[index].active) {
      civilizationCards[index].active = true
      count++
    }
  }

  function generateIndex() {
    return Math.floor(Math.random() * civilizationCards.length)
  }
  game.activeCivilizationCards += cards
}

export function addPlayer(player) {
  let { players } = game
  player.id = players.length + 1
  player.score = 0
  players.push(player)
}

export default game
