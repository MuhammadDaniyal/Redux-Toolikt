// import { addToCart } from '../services/actions/index'
import { connect } from 'react-redux'
import Header from "../components/Header.jsx";

const mapStateToProps = (state) => ({
    Data: state.cartItems
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
