import React, { useContext } from 'react'
import './Cart.css'
import{StoreContext} from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';
function Cart() {

  const{cartItems,food_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return(
              <div>
              <div className='cart-item-title cart-items-item'>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>₹: {item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>₹: {item.price*cartItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
              </div>
              <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹: {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Charges</p>
              <p>₹: {getTotalCartAmount() === 0 ? 0 : 50}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>₹: {getTotalCartAmount()===0?0 : getTotalCartAmount()+2}</p>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>Proceed To Check UP</button>
        </div>
        <div className="cart-promocode">
        <div>
          <p>If you have a promocode, please Enter here</p>
          <div className="cart-promocode-inputs">
            <input type="text" placeholder='Promocode' />
            <button>Submit</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Cart