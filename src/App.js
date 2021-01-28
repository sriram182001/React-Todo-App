import './App.css';
import { useState } from "react";
import Todo from "./components/todo/Todo"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

function App() {

  const [todos,setTodo] = useState([
    {
      name:"todo 1",
      desc:"description 1",
      id:1
    },
    {
      name:"todo2",
      desc:"description 2",
      id:2
    }
  ])

  const [form,setForm]= useState({
    name: "",
    desc: ""
  })

  const changeName = (e) => {
    setForm({
      name:e.target.value,
      desc:form.desc
    })
  }

  const todoAdd = (e) => {
    e.preventDefault();
    setTodo([...todos,{
      name:form.name,
      desc:form.desc,
      id:([...todos].length)+1
    }])
    setForm({
      name:"",
      desc:""
    })
  }

  const deleteTodo = (id,e) => {
    e.preventDefault()
    setTodo(todos.filter((todo) => todo.id !== id))
  }


  return (
    <Router>
    <div className="App">

      <Route exact path="/">
      <div className="todo-container">
        {
          todos.map((todo) => <Todo deleteTodo={deleteTodo} todo={todo} key={todo.id} />)
        }
      </div>
      </Route>
      
      <Route exact path="/add">
      <form className="add-form">
        <input value={form.name} onChange={changeName} placeholder="Name" type="text" />
        <input value={form.desc} onChange={(e)=>{ setForm({name:form.name,desc:e.target.value})}} placeholder="Description" type="text" />
        <button onClick={todoAdd}>Add</button>
      </form> 
      <Link to="/">GO TO HOME</Link>     
      </Route>
    </div>
    </Router>
  );
}

export default App;
