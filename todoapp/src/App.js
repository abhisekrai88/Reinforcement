import React, { useState, useEffect } from "react"
import './App.css';
//importing components
import Form from "./components/Form"
import TodoList from "./components/TodoList"


function App() {
  
  //states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] =useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //run once when app starts
  useEffect(() => {
    getLocalTodos();
  }, [])

  //useeffect
  useEffect(() => {
    filterHandlers();
    saveLocalTodos();
  }, [todos, status])

  //functions & events
  const filterHandlers = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed == true))
        break;
      case 'outstanding':
        setFilteredTodos(todos.filter(todo => todo.completed == false))
        break;
      default: setFilteredTodos(todos);
        break;
    }
  }
  //save to local
  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos))
    }
  
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    } else{
      let todoLocal= JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }
  
  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form 
        setStatus={setStatus}
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}/>
      <TodoList 
        filteredTodos={filteredTodos}
        setTodos={setTodos} 
        todos={todos}/>
    </div>
  );
}

export default App;
