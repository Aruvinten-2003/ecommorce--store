import Order from '../../models/Order'
import { connectDB } from '../../utils/db'

export default defineEventHandler(async (event) => {
  await connectDB()

  const body = await readBody(event)
  const order = await Order.create(body)

  return order
})
