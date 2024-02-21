import { useState } from "react"

export function Horloge() {

    const [heure, setHeure] = useState(new Date())
    setTimeout(() => {
        setHeure(new Date())
    }, 1000)

    return (
        <div>
            <h2>Horloge</h2>
            <p> {heure.getHours()} : {heure.getMinutes()} : {heure.getSeconds()} </p>
        </div>
    )
}