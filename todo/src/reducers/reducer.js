const reducer = (state, action) =>{
    const todoListCopy = [...state.todoList]
    switch(action.type){
        case 'ADD_ITEM':
            return {
                ...state,
                item: action.payload
             }
       
    
        case 'ADD_VALUE':
                todoListCopy.push({
               name: state.item, toggled: false
           })
           return{
               ...state,
               todoList: [...todoListCopy]
           }
        case 'RESET_ITEM':
            return{...state,
        item:''
    }
        case 'TOGGLE_ITEM':
            todoListCopy.map(todo => {
                if(todo.name === action.payload){
                    todo.toggled= !todo.toggled
                }
            })
            return{
                ...state,
                todoList:[...todoListCopy]
            }
        case 'COMPLETED':
            const unCompletedItems =todoListCopy.filter(todo => todo.toggled === false)
            return{
                ...state,
                todoList: [...unCompletedItems]
            }
   default:
       return state
}
}
export default reducer