import React, {useState} from "react";

export default function RecursiveButton(props) {

    const [showMode, setShowMode] = useState(false);
    console.log("Create button");
    return (
        <>
            <button onClick={() => setShowMode(!showMode)}>
                Покажи/скрой следующий шаг
            </button>
            <br />
            {showMode ? <RecursiveButton /> : null}
        </>
    )
}