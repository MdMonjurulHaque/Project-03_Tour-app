import React, { useState } from 'react'
import './app.css'
import Data from './Data/data.jsx'
import Home from './Components/Home/Home'

const App = () => {
   
    const [tours, setTours] = useState(Data)
    const removeTour = (id) =>{
    const newTour = tours.filter((tour)=>tour.id != id)
setTours(newTour);
    }

  return (
    <div>
   <Home tours={tours} removeTour={removeTour} />
    </div>
  )
}

export default App
