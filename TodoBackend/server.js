const express = require('express') // Import express
const app = express() // Create an instance of an Express app

// Middleware to parse JSON and URL-encoded data
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))

// // Middleware to set CORS headers
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
//   res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization')
//   res.setHeader('Access-Control-Allow-Credentials', true)
//   next()
// })

let todos = [
  {
    id: '1',
    todo: 'Learn Node and Express',
    Done: false,
  },
  {
    id: '2',
    todo: 'Learn React and next',
    Done: true,
  },
  {
    id: '3',
    todo: 'Learn Spring and SpringBoot',
    Done: true,
  },
]

app.get('/todos', (req, res) => {
  try {
    res.status(200).json({ todos })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Something went wrong' })
  }
})

app.post('/todos', (req, res) => {
  try {
    const { todo } = req.body
    if (!todo) {
      return res.status(400).json({ error: 'Todo is required' })
    }

    const newTodo = {
      id: (todos.length + 1).toString(),
      todo,
      Done: false,
    }
    todos.push(newTodo)
    res.status(201).json({ message: 'Todo added successfully', newTodo })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Something went wrong' })
  }
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
