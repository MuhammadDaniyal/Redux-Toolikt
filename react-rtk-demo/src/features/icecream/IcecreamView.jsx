import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './iceCreamSlice'

const IcecreamView = () => {
    const [value, setValue] = useState(1)
    // so read data from redux store in the react component we use useSelector Hook
    const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCream)
    const dispatch = useDispatch()
    return (
        <>
            <div>
                <h2>Number of ice creams : {numOfIceCreams}</h2>
                <button onClick={() => dispatch(ordered())} >Order ice cream</button>
                <input
                    type="number"
                    value={value}
                    onChange={(e) => setValue(parseInt(e.target.value))}
                />
                <button onClick={() => dispatch(restocked(value))}>Restoked ice creams</button>
            </div>
        </>
    )
}

export default IcecreamView