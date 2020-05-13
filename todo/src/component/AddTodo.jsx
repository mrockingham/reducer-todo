import React from 'react'




const AddTodo =props =>{
    const {state, dispatch} = props
    


    const onChangeHandler = e => {
        dispatch({type: 'ADD_ITEM', payload: e.target.value})
    }

    const onClickHandler = e => {
        dispatch({ type: 'ADD_VALUE'})
        dispatch({ type: 'RESET_ITEM'})
    }
console.log(props)
    return(
        <div>
            
                <input 
                
                className='items'
                value={state.item}
                
                onChange={onChangeHandler}
                />
                <button outline onClick={onClickHandler}>Add Todo</button>
                <button outline onClick={() => dispatch({ type: 'COMPLETED'})}>
                    Clear</button>

            
        </div>
    )


}




export default AddTodo