import bcrypt from 'bcryptjs'
import User from '../models/userModel.js'

export const signupUser = async (req, res) => {
  try {
    const { name, username, email, password } = req.body
    const existingUser = await User.findOne({ $or: [{ email }, { username }] })
    if (existingUser) {
      throw new Error('User already exists')
    }
    const hashedPassword = await bcrypt.hash(password, 12)
    const user = await User.create({
      name,
      username,
      email,
      password: hashedPassword,
    })
    await user.save()
    res.status(201).json({
      name: user.name,
      username: user.username,
      email: user.email,
      id: user._id,
      password: user.password,
    })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username })
    if (!user) {
      throw new Error('User does not exist')
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password)
    if (!isPasswordCorrect) {
      throw new Error('Invalid credentials')
    }
    res.status(200).json({
      name: user.name,
      username: user.username,
      email: user.email,
      id: user._id,
      password: user.password,
    })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
