const express = require('express')
const app = express()
const { productsjson, findHigherId } = require('./catalog.js')
const { validateSchema, validatePatch } = require('./schemas/catalog.js')
const cors = require('cors')

app.disable('x-powered-by')

app.use(express.json())
app.use(cors(
  {
    origin: (origin, callback) => {
      const allowOrigins = ['http://localhost:3000', 'http://localhost:8080', 'http://127.0.0.1:5500']
      if (allowOrigins.includes(origin) || !origin) {
        callback(null, true)
      }
      return callback(new Error('Not allowed by CORS'))
    }
  })
)

app.get('/', (req, res) => {
  res.json({ response: 'hola' })
})

app.get('/products', (req, res) => {
  const { category } = req.query

  if (category) {
    const filteredProducts = productsjson.filter(
      product => product.category.toLowerCase() === category.toLowerCase()
    )
    return res.json(filteredProducts)
  }
  return res.json(productsjson)
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params
  const cartera = productsjson.find(el => el.id === id)
  if (cartera) return res.json(cartera)
  res.status(404).send('404 Not Found')
})

app.post('/products', (req, res) => {
  const result = validateSchema(req.body)

  if (result.error) {
    res.status(401).json({ error: JSON.parse(result.error.message) })
    return
  }

  const newProduct = {
    id: findHigherId() + 1,
    ...result.data
  }

  productsjson.push(newProduct)

  res.status(201).json(newProduct)
})

app.patch('/products/:id', (req, res) => {
  const result = validatePatch(req.body)

  if (result.error) {
    res.status(400).json({ error: JSON.parse(result.error.message) })
    return
  }
  const { id } = req.params
  const productIndex = productsjson.findIndex(e => e.id === id)

  if (productIndex < 0) {
    res.status(404).json({ error: 'no se ha encontrado un producto con ese ID' })
    return
  }

  const updateProduct = {
    ...productsjson[productIndex],
    ...result.data
  }

  productsjson[productIndex] = updateProduct

  return res.json(updateProduct)
})

app.delete('/products/:id', (req, res) => {
  const { id } = req.params
  const productIndex = productsjson.findIndex(e => e.id === id)

  if (productIndex < 0) {
    res.status(404).json({ error: 'no se ha encontrado un producto con ese ID' })
    return
  }

  productsjson.splice(productIndex, 1)
  res.status(204).send('204 El producto ha sido eliminado')
})

app.use((req, res) => {
  res.status(404).send('<h1>Error has ocurred</h1>')
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`im listening on ${PORT}`)
})
