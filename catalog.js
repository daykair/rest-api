const products = [
  {
    id: '01',
    name: 'Coach de Corazon',
    description:
      'Hermosa cartera, un accesorio muy dulce que no puede faltar para completar tu look',
    img: '/img/Cartera (1).jpeg',
    price: 25.0,
    category: 'Carteras'
  },
  {
    id: '02',
    name: 'Coach Cuadrada',
    description:
      'Hermosa cartera, un accesorio muy dulce que no puede faltar para completar tu look',
    img: '/img/Cartera (2).jpeg',
    price: 25.0,
    category: 'Carteras'
  },
  {
    id: '03',
    name: 'Cartera de Caballero',
    description:
      'Hermosa cartera, un accesorio muy dulce que no puede faltar para completar tu look',
    img: '/img/Cartera (3).jpeg',
    price: 25.0,
    category: 'Billeteras'
  },
  {
    id: '04',
    name: 'Koala Marc Jacobs',
    description:
      'Koala Marc Jacobs es un marca de koalas de alta calidad, con un estilo elegante y moderno',
    img: '/img/Cartera (1).jpeg',
    price: 18.0,
    category: 'Koalas'
  },
  {
    id: '05',
    name: 'Coach Cuadrada',
    description:
      'Hermosa cartera, un accesorio muy dulce que no puede faltar para completar tu look',
    img: '/img/Cartera (1).jpeg',
    price: 25.0,
    category: 'Carteras'
  },
  {
    id: '06',
    name: 'Coach Cuadrada',
    description:
      'Hermosa cartera, un accesorio muy dulce que no puede faltar para completar tu look',
    img: '/img/Cartera (1).jpeg',
    price: 25.0,
    category: 'Carteras'
  },
  {
    id: '07',
    name: 'Coach Cuadrada',
    description:
      'Hermosa cartera, un accesorio muy dulce que no puede faltar para completar tu look',
    img: '/img/Cartera (1).jpeg',
    price: 25.0,
    category: 'Carteras'
  },
  {
    id: '08',
    name: 'Coach Cuadrada',
    description:
      'Hermosa cartera, un accesorio muy dulce que no puede faltar para completar tu look',
    img: '/img/Cartera (1).jpeg',
    price: 25.0,
    category: 'Carteras'
  },
  {
    id: '11',
    name: 'Cartera Coach Cuadrada',
    description:
      'Hermosa cartera, un accesorio muy dulce que no puede faltar para completar tu look',
    img: '/img/Cartera (1).jpeg',
    price: 25.0,
    category: 'Carteras'
  },
  {
    id: '10',
    name: 'Cartera Coach Cuadrada',
    description:
      'Hermosa cartera, un accesorio muy dulce que no puede faltar para completar tu look',
    img: '/img/Cartera (1).jpeg',
    price: 25.0,
    category: 'Carteras'
  }]

const productsjson = products

function findHigherId () {
  const higherId = []
  for (let i = 0; i < products.length; i++) {
    higherId.push(products[i].id)
  }
  return Math.max(...higherId)
}

module.exports = { productsjson, findHigherId }
