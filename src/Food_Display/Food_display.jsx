import React, { useContext } from 'react'
import './Food_display.css'
import { StoreContext } from '../Context/Storecontext'
import Food_Item from '../Food_Item/Food_Item'
function Food_display({category}) {
    const {food_list} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
        <h2>Top Dishes near by you</h2>
        <div className="food-display-list">
          {food_list.map((item,index)=>{
            if(category === "All" || category===item.category){
              return <Food_Item key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
            }
          })}
        </div>
    </div>
  )
}

export default Food_display