import mongoose from 'mongoose'

let isConnected = false

export async function connectDB() {
  if (isConnected) {
    return
  }

  const config = useRuntimeConfig()
  const uri = config.mongodbUri

  if (!uri) {
    throw new Error('MONGODB_URI is not defined')
  }

  await mongoose.connect(uri)

  isConnected = true
}
