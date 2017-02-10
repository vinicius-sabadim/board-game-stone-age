import players, { addPlayer } from './player'

const newPlayer = {
  name: 'Vinicius',
  color: 'blue'
}

describe('Player', () => {
  describe('Include a new player', () => {
    test('it should add the new player on players', () => {
      addPlayer(newPlayer)
      expect(players.length).toBe(1)
    })
    test('it should have all the initial setup', () => {
      expect(players[0].id).toBe(1)
      expect(players[0].score).toBe(0)
      expect(players[0].people).toBe(5)
      expect(players[0].foodGenerate).toBe(0)
      expect(players[0].resource.food).toBe(0)
      expect(players[0].resource.wood).toBe(0)
      expect(players[0].resource.brick).toBe(0)
      expect(players[0].resource.stone).toBe(0)
      expect(players[0].resource.gold).toBe(0)
    })
    test('it have a correct id', () => {
      addPlayer(newPlayer)
      expect(players.length).toBe(2)
      expect(players[1].id).toBe(2)
    })
  })
})
