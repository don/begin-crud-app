@app
begin-app

@http
get  /todos
post /todos
post /todos/delete
get  /products
post /products

@tables
data
  scopeID *String
  dataID **String
  ttl TTL

products
  productId *Number

