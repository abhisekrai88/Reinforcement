import React from "react";


const Form = () =>{
    //JS code and functions can be written below
    const inputTextHandler = (e) => {
        console.log(e.target.value);
    };
    return(
        <form>
            <input onChange={inputTextHandler} type="text" className="todo-input"/>
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="outstanding">Outstanding</option>
                </select>
            </div>
        </form>
    );
};

export default Form;