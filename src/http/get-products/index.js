const data = require('@begin/data')

exports.handler = async function products (req) {
  let products = await data.get({
    table: 'products'
  })
  // Return oldest product first
  // TODO remove this
  product.sort((a, b) => a.created > b.created)
  return {
    statusCode: 201,
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: JSON.stringify({
      products
    })
  }
}
