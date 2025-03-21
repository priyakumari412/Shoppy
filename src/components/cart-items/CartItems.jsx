import React, { useContext, useEffect } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import removeicon from '../Assets/remove.png'
const CartItems = () => {
  const { all_products, cartItems, removeFromCart,getTotalCartAmount } = useContext(ShopContext)
  useEffect(() => {
    console.log("Updated cart:", cartItems);
  }, [cartItems]);
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <div>
        {all_products.map((e) => {
          // console.log(e)
          console.log(cartItems)
          // console.log(cartItems[e.id])

          if ((cartItems[e.id]) > 0) {
            return <div className="cartitems-format cartitems-format-main">
              <img src={e.image} alt="" className='cart-image' />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className='cartitems-quantity'>{cartItems[e.id]}</button>
              <p>${e.new_price * cartItems[e.id]}</p>
              <img className='removeicon' src={removeicon} alt="" onClick={() => { removeFromCart(e.id) }} />
            </div>
          }
          return null
        })}
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
              <div className="cartitems-total-items">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <div className="cartitems-total-items">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <div className="cartitems-total-items">
                <p>Total</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <button>PROCEED TO CHECKOUT</button>
            </div>
          </div>
          <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitem-promobox">
              <input type="text" placeholder='Promo code' />
              <button>Submit</button>
            </div>
          </div>

        </div>
      </div>
    </div >
  )
}

export default CartItems