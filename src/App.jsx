import {useState} from 'react'

export default function App() {
const [UltimaLetra, SetLetra] = useState("Murilo")

function handleAdicionar(){
  SetLetra(UltimaLetra + "o")
}

  return (
    <div>
      <h1>{UltimaLetra}</h1>
      <button onClick={handleAdicionar}>Aperte</button>
    </div>
  )
}
