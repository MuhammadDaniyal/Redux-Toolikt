import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, editTodo } from '../services/actions'
import { FaTrash, FaEdit, FaAddressCard } from "react-icons/fa";

const TodoList = (currElem) => {
    const { id, List } = currElem
    const [edit, setEdit] = useState(false)
    const [val, setNewVal] = useState(List)
    const dispatch = useDispatch()

    return (
        <div className='todo_style'>
            {
                (edit === true) ?
                    <div>
                        <input
                            className="input"
                            value={val}
                            onChange={(e) => setNewVal(e.target.value)}
                            placeholder="Edit item"
                        />
                        <FaAddressCard className='fa-Trash' onClick={() => dispatch(editTodo(id, val), setEdit(false))} />
                    </div>
                    :
                    <div className='todo_style'>
                        <li>
                            {List}
                        </li>
                        <FaEdit className='fa-Trash' onClick={() => setEdit(true)} />
                    </div>
            }
            <FaTrash className='fa-Trash' onClick={() => dispatch(deleteTodo(id))} />
        </div>
    )
}

export default TodoList