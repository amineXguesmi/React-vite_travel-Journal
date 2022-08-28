import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import Data from './components/Data'
function App() {
  const data_el=Data.map( (el)=> <Card 
                                    key={el.id}
                                    el={el} />
        )
  return (
    <div className="App_container">
      <Header/>
      <div className="Cards">
      {data_el}
      </div>
    </div>
  )
}

export default App
