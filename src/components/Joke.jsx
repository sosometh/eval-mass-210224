import { useState } from "react"

export function Joke(){

    const [joke, setJoke] = useState("")

    async function getJoke() {
        const reponse = await fetch("https://v2.jokeapi.dev/joke/Any?lang=fr")
        const cJoke = await reponse.json()
        //setup --> delivery (deux parties)
        setJoke(`${cJoke.setup} --> ${cJoke.delivery}`)
    }

    const handleClick = () => {
        getJoke()
    }

    return (
        <div>
            <h2>Bouton qui affiche une blague</h2>
            <button onClick={handleClick} >Get Joke</button>
            <p>{joke}</p>
        </div>
    )
}