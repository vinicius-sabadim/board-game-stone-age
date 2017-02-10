import building from './building'
import civilization, { drawCivilizationCards } from './civilization'
import player from './player'
import resource from './resource'

let game = {
  players: player,
  resource: resource,
  civilizationCards: civilization,
  activeCivilizationCards: 0,
  buildingCards: building
}

game.activeCivilizationCards = drawCivilizationCards()

export default game
