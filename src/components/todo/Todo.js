import "./todo.css"


const Todo = (props) => {

    return (
        <div className="todo-item" >
            <h1>
                {props.todo.name}
            </h1>
            <p>{props.todo.desc}</p>
            <button onClick={props.deleteTodo.bind(this,props.todo.id)}>Delete</button>
        </div>
    )
}


export default Todo;