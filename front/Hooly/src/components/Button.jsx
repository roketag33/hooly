import {useState} from "react";

function Button({name}) {
    const [number, setNumber] = useState(0)

    function handleNumber() {
        setNumber(number + 1)
    }

    return (
        <button className="btn btn-primary" onClick={handleNumber}>
            {name} clicked {number} times
        </button>
    )
}

export default Button