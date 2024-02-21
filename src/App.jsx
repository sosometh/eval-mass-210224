import { useState } from 'react'
import './App.css'
import { Horloge } from './components/Horloge'
import { AddChaussure } from './components/AddChaussure'
import { Joke } from './components/Joke'

function App() {

  return (
    <div>
      <Horloge />
      <AddChaussure />
      <Joke />
    </div>
  )
}

export default App
