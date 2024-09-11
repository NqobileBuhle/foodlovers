import React from 'react'
import Home from './Components/Home'
import backGround from './assets/backGround.jpg'
import Recipes from './Components/Recipes'

const App = () => {
  return (
    <div className="bg-cover bg-center h-screen"
      style= {{ backgroundImage: `url(${backGround})` }}>
       <Home/>
       <Recipes/>
    </div>
  )
}

export default App

