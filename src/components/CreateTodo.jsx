export function CreateTodo(props){
    return <div>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
        <h3>{props.completed}</h3>
    </div>
}