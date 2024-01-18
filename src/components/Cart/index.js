import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";
import {useSelector} from "react-redux";


const Cart =  () => {

    const cart = useSelector(state => state.cr);

    return(
        <>
        {
            cart.cartItems.length ===0? <EmptyCart />:
            <FilledCart/>
        }
        
        </>
    )
}

export default Cart;