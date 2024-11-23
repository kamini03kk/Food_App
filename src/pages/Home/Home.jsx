import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Exploremenu from '../../components/Exploremenu/Exploremenu'
import Food_display from '../../Food_Display/Food_display'
function Home() {
  const [category, setCategory] = useState("All")
  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <Food_display category={category}/>
    </div>
  )
}

export default Home