import React, { useReducer, useState} from 'react'
import reducer from './reducers/reducer'

import TodoList from './component/TodoList'
import AddTodo from './component/AddTodo'


  


import './App.css';



const initalState = {
  item: '', 
  todoList:[],
}

const App = ()=> {
  const [state, dispatch] = useReducer(reducer, initalState )
  

  
  return (
    <div className="App">
      <h1>Michaels to do list</h1>
     <AddTodo state={state} dispatch= {dispatch}
     />
     <TodoList state={state} dispatch ={dispatch}
     />
       
        
    
    </div>
  );
}

export default App;
