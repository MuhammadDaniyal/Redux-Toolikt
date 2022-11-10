import { ADD_TODO, DELETE_TODO, EDIT_TODO } from '../constant'

const initialState = []

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: new Date().getTime().toString(),
                    List: action.payload
                }
            ]

        case DELETE_TODO:
            const filterTodo = state.filter((currElem) => currElem.id !== action.payload)
            return [...filterTodo]

        case EDIT_TODO:
            const editTodo = state.filter((currElem) => currElem.id !== action.id)
            return [
                ...editTodo,
                {
                    List: action.payload
                }
            ]
        default:
            return state;
    }
}