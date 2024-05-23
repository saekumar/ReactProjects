import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    })
    console.log('MongoDB connection successful')
  } catch (error) {
    console.log('MongoDB connection failed')
    console.log(error)
    process.exit(1)
  }
}

export default connectDb
