const listHelper = require('../config/list_helper')

const items = [
  {
    item: 'Cappuccino',
    owner: 'Benjamin Coffee',
    likes: 53
  },
  {
    item: 'Esspresso',
    owner: 'Benjamin Coffee',
    likes: 14
  },
  {
    item: 'Black Coffee',
    owner: 'Jerry Coffee',
    likes: 17
  },
  {
    item: 'Under The Kitchen Chair',
    owner: 'Jerry Coffee',
    likes: 4
  },
  {
    item: 'Making A Dog Pie',
    owner: 'Jerry Coffee',
    likes: 42
  }
]

test('dummy returns 1', () => {
  const items = []

  const result = listHelper.dummy(items)
  expect(result).toBe(1)
})

describe('Total likes', () => {
  test('of all the items is right', () => {
    const result = listHelper.totalLikes(items)
    expect(result).toBe(130)
  })
})

describe('Favorite item', () => {
  test('is right', () => {
    const result = listHelper.favoriteItem(items)
    expect(result).toEqual(53)
  })
})

describe('Most items', () => {
  const mostOwned = {
    owner: 'Jerry Coffee',
    items: 3
  }

  test('is right', () => {
    const result = listHelper.mostItems(items)
    expect(result).toEqual(mostOwned)
  })
})

describe('Most likes', () => {
  const mostAllLikes = {
    owner: 'Benjamin Coffee',
    likes: 67
  }

  test('is right', () => {
    const result = listHelper.mostLikes(items)
    expect(result).toEqual(mostAllLikes)
  })
})
