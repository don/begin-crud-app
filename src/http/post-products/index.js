let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = async function post (req) {
  let product = arc.http.helpers.bodyParser(req) // Base64 decodes + parses body
  product.created = product.created || Date.now()
  // todo.completed = !!todo.completed
  await data.set({
    table: 'products',
    ...product
  })
  return {
    statusCode: 302,
    headers: {
      'location': '/',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}
