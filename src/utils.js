export default function rollDice(times = 1) {
  let count = 1
  let sum = 0
  while (count <= times) {
    sum = sum + Math.floor(Math.random() * 6) + 1
    count++
  }
  return sum
}
