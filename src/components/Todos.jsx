// import { useState } from "react";
// import { CreateTodo } from "./CreateTodo";

// let counter = 1;
// export function Todos(){

//     const[todo, setTodo] = useState([{
//         key : 1,
//         title : "Learn react",
//         description : "from 7 to 9",
//         completed : false
//     },
//     {
//         key : 2,
//         title : "Learn express",
//         description : "from 9 to 11",
//         completed : false   
//     },
//     {
//         key : 3,
//         title : "Learn rust",
//         description : "from 11 to 1",
//         completed : false
//     }

// ])
// function addTodo(){
//     setTodo([...todo, {
//         key : counter++,
//         title : "Be a react pro by the end of 2024",
//         description : "in the title",
//         completed : false
//     }])
// }           

// return <div>
//     <button onClick = {addTodo}>Add todo</button>
//     <CreateTodo title = 'watch movie' description = 'last airbender'></CreateTodo>
//     {todo.map((todo) => {
//         return <div>
//             <Todos key = {todo.id} title = {todo.title} description = {todo.description}></Todos>
//         </div>
//     })}
// </div>


// }