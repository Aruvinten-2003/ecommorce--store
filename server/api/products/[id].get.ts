import Product from '../../models/Product'
import { connectDB } from '../../utils/db'

export default defineEventHandler(async (event) => {
  await connectDB()

  const id = getRouterParam(event, 'id')
  const product = await Product.findById(id).exec()

  if (!product) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Product not found'
    })
  }

  return product
})
