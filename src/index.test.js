import game from './'

describe('Game start', () => {
  describe('Initial setup', () => {
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
})
