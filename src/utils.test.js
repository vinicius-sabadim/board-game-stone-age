import rollDice from './utils'

describe('Utils', () => {

  describe('Roll dice', () => {

    test('it should return a number between 1 and 6', () => {
      expect(rollDice()).toBeGreaterThanOrEqual(1)
      expect(rollDice()).toBeLessThanOrEqual(6)
    })
  })

})
