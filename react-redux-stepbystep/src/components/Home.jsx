import React from 'react'
import { useDispatch } from 'react-redux'

import { addToCart, removeToCart } from '../services/actions/index'

const Home = (props) => {
    // console.log(props);

    const dispatch = useDispatch()

    return (
        <>
            <div>

                <h1>Home Component</h1>
                <div className="cart-wrapper">
                    <div className="img-wrapper item">
                        <img src="https://149434221.v2.pressablecdn.com/wp-content/uploads/2015/08/dot-online.png" />
                    </div>
                    <div className="text-wrapper item">
                        <span>
                            I-Phone
                        </span>
                        <span>
                            Price: $1000.00
                        </span>
                    </div>

                    {/* OLD VERSION METHOD */}

                    {/* <div className="btn-wrapper item">
                        <button onClick={() => props.addToCartHandler({
                            price:1000,
                            name: 'I Phone'
                        })}>
                            Add To Cart
                        </button>
                        <button onClick={() => props.removeToCartHandler()}>
                            Remove To Cart
                        </button>
                    </div> */}

                    {/* WITH HOOKS */}

                    <div className="btn-wrapper item">
                        <button onClick={() => dispatch(addToCart({
                            price:1000,
                            name: 'I Phone'
                        }))}>
                            Add To Cart
                        </button>
                        <button onClick={() => dispatch(removeToCart())}>
                            Remove To Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home