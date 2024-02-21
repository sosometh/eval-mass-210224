import { useState } from "react"

export function AddChaussure(){

    const [items, setItems] = useState(["nike1","nike2","nike3"])
    const [inputItem, setInputItem] = useState("")

    const handleInputItem = e => {
        setInputItem(e.target.value)
    }

    const handleClick = () => {
        setItems([...items, inputItem])
        setInputItem("")
    }

    const itemsElements = []
    items.map((item,i) => {
        itemsElements.push(
            <li key={i} >{item}</li>
        )
    })

    return (
        <div>
            <h2>Forumulaire qui ajoute des chaussons</h2>
            <div>
                <label>
                    <input type="text" placeholder="Rentrez une chaussure" value={inputItem} onInput={handleInputItem} />
                </label>
                <button onClick={handleClick} >Add item</button>
            </div>
            <ul>
                {itemsElements}
            </ul>
        </div>
    )
}