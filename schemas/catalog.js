const z = require('zod')

const verifiedProduct = z.object({
  name: z.string({
    invalid_type_error: 'Ingrese un valor valido',
    required_error: 'Campo requerido'
  }),
  description: z.string().min(20),
  img: z.string().endsWith('.png'),
  price: z.number().positive(),
  category: z.string()
})

function validateSchema (object) {
  return verifiedProduct.safeParse(object)
}

function validatePatch (object) {
  return verifiedProduct.partial().safeParse(object)
}

module.exports = { validateSchema, validatePatch }
