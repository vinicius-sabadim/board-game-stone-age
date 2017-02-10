export function initialResource() {
  return {
    wood: 30,
    brick: 30,
    stone: 30,
    gold: 30
  }
}

let resource = initialResource()

export function calculateFood(sum) {
  return Math.floor(sum / 2)
}

export function calculateWood(sum) {
  const result = Math.floor(sum / 3)
  resource.wood -= result
  return result
}

export function calculateBrick(sum) {
  const result = Math.floor(sum / 4)
  resource.brick -= result
  return result
}

export function calculateStone(sum) {
  const result = Math.floor(sum / 5)
  resource.stone -= result
  return result
}

export function calculateGold(sum) {
  const result = Math.floor(sum / 6)
  resource.gold -= result
  return result
}

export default resource
