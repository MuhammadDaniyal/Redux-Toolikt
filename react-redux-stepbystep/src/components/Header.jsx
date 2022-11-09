import React from 'react'

import { useSelector } from 'react-redux'

const Header = () => {
    // console.log('propsData:', props.Data);

    const itemLength = useSelector(state => state.cartItems)
    console.log(itemLength);

    return (
        <div>
            <div>
                <div className="add-to-cart">
                    <span className="cart-count">{itemLength.length}</span>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
                </div>
            </div>
        </div>
    )
}

export default Header