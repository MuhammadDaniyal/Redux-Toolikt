import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from '../cake/cakeSlice'

/*
useSelector Hook: 
    Which is used to get hold of any state that is maintained in redux store

1) this hook accept a function as a argument
    this function also called sselector function
        1)it recieve as a redux state as a parameter
        2)state refers to the redux state which contain multiple reducers
2) useSelector wohi return krta hy jo chez selector function return krrha hy 
 */

const CakeView = () => {
    const [value, setValue] = useState(1)
    // useSelector wohi return krta hy jo chez selector function return krrha hy 
    const numOfCakes = useSelector((state) => state.cake.numOfCakes)

    // this hook returns a ref to dipatch function from the redux store
    const dispatch = useDispatch()
    return (
        <>
            <div>
                <h2>Number of Cakes : {numOfCakes}</h2>
                <button onClick={() => dispatch(ordered())}>Order Cake</button>
                <input
                    type="number"
                    value={value}
                    onChange={(e) => setValue(parseInt(e.target.value))}
                />
                <button onClick={() => dispatch(restocked(value))}>Restoked Cakes</button>
            </div>
        </>
    )
}

export default CakeView