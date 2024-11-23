import React, { useContext } from 'react'
import './Placeorder.css'
import { StoreContext } from '../../Context/StoreContext'
function Placeorder() {
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div>
      <form className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multiple-feild">
            <input type="text" placeholder='First Name'/>
            <input type="text" placeholder='Last Name'/>
          </div>
          <input type="email" placeholder='Enter Your Email'/>
          <input type="text" placeholder='Street'/>
          <div className="multiple-feild">
            <input type="text" placeholder='City'/>
            <input type="text" placeholder='State'/>
          </div>
          <div className="multiple-feild">
            <input type="text" placeholder='Pincode'/>
            <input type="text" placeholder='phone Number'/>
          </div>
        </div>
        <div className="place-order-right">
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
              <p>₹: {getTotalCartAmount()===0 ? 0 : 50}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>₹: {getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
          </div>
          <button>Proceed To Payment</button>
        </div>
        </div>
      </form>
    </div>
  )
}

export default Placeorder