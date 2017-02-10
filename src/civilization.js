const civilizationCards = [
  {
    id: 1,
    type: 'collection',
    name: 'statue',
    active: false,
    bought: false
  },
  {
    id: 2,
    type: 'collection',
    name: 'statue',
    active: false,
    bought: false
  },
  {
    id: 3,
    type: 'collection',
    name: 'statue',
    active: false,
    bought: false
  },
  {
    id: 4,
    type: 'collection',
    name: 'statue',
    active: false,
    bought: false
  },
  {
    id: 5,
    type: 'collection',
    name: 'statue',
    active: false,
    bought: false
  },
]

export function drawCivilizationCards(cards = 4) {
  let count = 0
  while (count < cards) {
    let index = generateIndex()
    if (!civilizationCards[index].active) {
      civilizationCards[index].active = true
      count++
    }
  }
  return cards
}

function generateIndex() {
  return Math.floor(Math.random() * civilizationCards.length)
}

export default civilizationCards
