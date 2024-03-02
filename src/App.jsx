import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
      .then(async(res) => {
        const data = await res.json()
        setTodos(data.todos)
      })
    }, 2000)
   }, [])




return <div>
  {todos.map((todo) => {
    return <div  key={todo.id}>
      <Todo title = {todo.title} description = {todo.description} completed = {todo.completed}></Todo>
    </div>
  })}
</div>
}

function Todo(props){
  return <div>
    <h2>{props.title}</h2>
    <h2>{props.description}</h2>
    <h2>{props.completed === true ? "Completed" : "Not Completed"}</h2>
  </div>
}
export default App
