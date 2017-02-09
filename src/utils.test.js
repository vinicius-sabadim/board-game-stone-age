import rollDice from './utils'

describe('Utils', () => {
  describe('Roll dice', () => {
    describe('1 time', () => {
      test('it should return a number between 1 and 6', () => {
        expect(rollDice()).toBeGreaterThanOrEqual(1)
        expect(rollDice()).toBeLessThanOrEqual(6)
      })
    })
    describe('2 times', () => {
      test('it should return a number between 1 and 12', () => {
        expect(rollDice()).toBeGreaterThanOrEqual(1)
        expect(rollDice()).toBeLessThanOrEqual(12)
      })
    })
    describe('3 times', () => {
      test('it should return a number between 1 and 18', () => {
        expect(rollDice()).toBeGreaterThanOrEqual(1)
        expect(rollDice()).toBeLessThanOrEqual(18)
      })
    })
  })
})
