import { useState } from "react";

export function Todos(){

    const[todo, setTodo] = useState([{
        title : "Learn react",
        description : "from 7 to 9",
        completed : false
    },
    {
        title : "Learn express",
        description : "from 9 to 11",
        completed : false   
    },
    {
        title : "Learn rust",
        description : "from 11 to 1",
        completed : false
    }

])


return <div>
    {todo.map((todo) => {
        return <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>{todo.completed == true ? "Completed" : "Mark as done"}</button>
        </div>
    })}
</div>


}