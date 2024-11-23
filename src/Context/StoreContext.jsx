import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null)
const StoreContextProvider = (props)=>{
    const [cartItems, setcartItems] = useState({})

    const addToCart = (ItemId)=>{
        if(!cartItems[ItemId])
        {
            setcartItems((prev)=>({...prev,[ItemId]:1}))
        }else{
            setcartItems((prev)=>({...prev,[ItemId]:prev[ItemId]+1}))
        }
    }
    const removeFromCart =(ItemId)=>{
        setcartItems((prev)=>({...prev,[ItemId]:prev[ItemId]-1}))
    }

    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems){
           if (cartItems[item]>0) {
            let itemInfo = food_list.find((product)=>product._id === item);
            totalAmount += itemInfo.price* cartItems[item];
           }
            
        }
        return totalAmount;
    }

    const contextvalue = {
        food_list,
        cartItems,
        setcartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }
    return(<StoreContext.Provider value={contextvalue}>
        {props.children}
    </StoreContext.Provider>)
}


export default StoreContextProvider