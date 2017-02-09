import game, {
  addPlayer,
  drawCivilizationCards
} from './'

const newPlayer = {
  name: 'Vinicius',
  color: 'blue'
}

describe('Game start', () => {
  describe('Initial setup', () => {
    beforeAll(() => {
      drawCivilizationCards()
    })

    test('it should have players defined', () => {
      expect(game.players).toBeDefined()
    })
    test('it should have wood defined', () => {
      expect(game.resource.wood).toBe(30)
    })
    test('it should have brick defined', () => {
      expect(game.resource.brick).toBe(30)
    })
    test('it should have stone defined', () => {
      expect(game.resource.stone).toBe(30)
    })
    test('it should have gold defined', () => {
      expect(game.resource.gold).toBe(30)
    })
    test('it should have civilization cards defined', () => {
      expect(game.civilizationCards).toBeDefined()
    })
    test('it should have 4 civilization cards actives', () => {
      expect(game.activeCivilizationCards).toBe(4)
    })
    test('it should have building cards defined', () => {
      expect(game.buildingCards).toBeDefined()
    })
  })
  describe('Include a new player', () => {
    test('it should add the new player on players', () => {
      addPlayer(newPlayer)
      expect(game.players.length).toBe(1)
      expect(game.players[0].id).toBe(1)
      expect(game.players[0].score).toBe(0)
    })
    test('it have a correct id', () => {
      addPlayer(newPlayer)
      expect(game.players.length).toBe(2)
      expect(game.players[1].id).toBe(2)
    })
  })
})
