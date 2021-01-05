import React from "react";
//import components
import Todo from "./Todo"

const TodoList = ({ filteredTodos,todos, setTodos}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                <li>{filteredTodos.map((todo) => (
                    <Todo 
                        setTodos={setTodos} 
                        todos={todos} 
                        key={todo.id} 
                        text={todo.text} 
                        todo={todo} />
                        
                ))}
                </li>
            </ul>
        </div>
    );
};

export default TodoList;
    