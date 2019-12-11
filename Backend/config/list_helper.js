const _ = require('lodash')

const dummy = items => {
  items = 1
  return items
}

const totalLikes = items => {
  const reducer = (sum, item) => sum + item.likes
  return items.reduce(reducer, 0)
}

const favoriteItem = items => {
  const reducer = (max, item) => Math.max(max, item.likes)
  return items.reduce(reducer, 0)
}

const mostItems = items => {
  const result = _(items)
    .groupBy('owner')
    .map(groups => ({ ...groups[0], amount: groups.length }))

  result.forEach(item => {
    let count = 0
    if (item.amount > count) {
      count = item.amount
      items = item
    }
  })

  const owners = {
    owner: items.owner,
    items: items.amount
  }
  return owners
}

const mostLikes = items => {
  const result = _(items)
    .groupBy('owner')
    .map((owner, person) => ({
      owner: person,
      likes: _.sumBy(owner, 'likes')
    }))
    .value()
  return _.maxBy(result, 'likes')
}

module.exports = {
  dummy,
  totalLikes,
  favoriteItem,
  mostItems,
  mostLikes
}
