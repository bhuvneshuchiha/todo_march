import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CreateTodo></CreateTodo>
     <Todos></Todos>
    </>
  )
}

export default App
