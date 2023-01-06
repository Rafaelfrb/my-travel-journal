import React from "react"
import TitleBar from "./components/TitleBar"
import Travel from "./components/Travel"
import data from "./data"

export default function App() {
    const content = data.map( (travelInfo) => {
        return (
            <Travel 
                travelInfo={travelInfo}
            />
        )
    }
        )

    return(
        <>
            <TitleBar />
            {content}
        </>
    )
}
