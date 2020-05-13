import React from 'react'


const Todo = props => {
const {todo, dispatch} = props

const onClickHandler = e => {
    e.preventDefault()
    dispatch({type: 'TOGGLE_ITEM', payload: todo.name})
}
return(
<div>
    <div
    onClick={(onClickHandler)}
    className = {todo.toggled ? 'todo-text toggled' : 'todo-text'}
    >{todo.name}</div>

</div>

)


}

export default Todo