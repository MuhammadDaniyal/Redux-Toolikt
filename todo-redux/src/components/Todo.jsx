import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from '../services/actions'
import TodoList from './TodoList'

const Todo = () => {
    const [val, setVal] = useState('')
    const todoList = useSelector((state) => state.todoReducer)
    const dispatch = useDispatch()
    const eventHandler = (e) => {
        setVal(e.target.value)
    }

    return (
        <>
            <div className='main-div'>
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />

                    <input
                        type="text"
                        placeholder='INPUT'
                        value={val}
                        onChange={eventHandler} />
                    <button className='new-btn' onClick={() => dispatch(addTodo(val), setVal(''))}>
                        ADD
                    </button>
                    {/* SHOW TODOLIST */}
                    <div>
                        {
                            todoList.map((currElem, index) => {
                                return (
                                    <TodoList key={index} {...currElem} />
                                )
                            })

                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo


/* <div>
                {
                    todoList.map((currElem, index) => {
                        const { id, List } = currElem
                        return (
                            <div key={index}>
                                <span>
                                    {List}
                                </span>
                                <div>
                                    <button onClick={() => dispatch(deleteTodo(id), setVal(''))}>
                                        DELETE
                                    </button>
                                </div>

                            </div>
                        )
                    })

                }
</div> */