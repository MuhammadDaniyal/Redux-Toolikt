import { ADD_TODO, DELETE_TODO, EDIT_TODO } from '../constant'

export const addTodo = (data) => {
    return{
        type: ADD_TODO,
        payload: data
    }
}
export const deleteTodo = (id) => {
    return{
        type: DELETE_TODO,
        payload: id
    }
}
export const editTodo = (id,data) => {
    return{
        type: EDIT_TODO,
        id: id,
        payload: data
    }
}