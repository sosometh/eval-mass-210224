import { useState } from 'react'
import './App.css'
import { Horloge } from './components/Horloge'
import { AddChaussure } from './components/AddChaussure'
import { Joke } from './components/Joke'
import { PokeSearch } from './components/PokeSearch'

function App() {

  return (
    <div>
      <Horloge />
      <AddChaussure />
      <Joke />
      <PokeSearch />
    </div>
  )
}

export default App
