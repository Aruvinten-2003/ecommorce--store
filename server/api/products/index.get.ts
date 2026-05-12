import Product from '../../models/Product'
import { connectDB } from '../../utils/db'

export default defineEventHandler(async () => {
  await connectDB()

  return Product.find().sort({ createdAt: -1 })
})
