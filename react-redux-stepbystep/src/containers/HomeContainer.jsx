import Home from "../components/Home.jsx";
import { addToCart, removeToCart } from '../services/actions/index'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    // Data: state.cartItems
})

const mapDispatchToProps = (dispatch) => ({
    // addToCartHandler -> recat ky component py call hoga
    addToCartHandler: (data) => dispatch(addToCart(data)),
    removeToCartHandler: () => dispatch(removeToCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

// export default Home