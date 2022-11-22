import { useSelector } from "react-redux"
import { getCartItems, getTotalPrice } from "../redux/cartSlice"

import CartItem from "./CartItem"

const Cart = () =>{
    const totalPrice = useSelector(getTotalPrice)
    const cartItems = useSelector(getCartItems);
    return (<div className="InsideCart">
        <h2> Items in your cart  </h2>
        <h2 >  Total <span className="total">{totalPrice}</span> $ </h2>
        <div className="InTheCart">
        {cartItems.map((cartItem, id) => <CartItem key={id} cartItem={cartItem}/>)}
        </div>
        </div>
    )
}

export default Cart