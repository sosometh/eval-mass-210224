import { useState } from "react"

export function PokeSearch() {

    const [pokemon, setPokemon] = useState("")
    const updatePokemon = e => {
        setPokemon(e.target.value)
    }

    const [pokemonInfos, setPokemonInfos] = useState({})

    async function getPoke() {
        const reponse = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${pokemon}`)
        const poke = await reponse.json()
        return poke
    }

    const handleClick = async () => {
        const current = await getPoke()
        setPokemonInfos(current)
        console.log(pokemonInfos)
    }


    return (
        <div>
            <h2>Barre de recherche de Pokemon</h2>
            <label>
                <input type="text" value={pokemon} onInput={updatePokemon} />
            </label>
            <button onClick={handleClick} >Search</button>
            <div>
                <img src={pokemonInfos.image}/>
            </div>
        </div>
    )
}