import React from "react";
import { Data, assignments, allDifficulty, } from "../data/utils"

const Home = () => {
    console.log(Data, assignments, allDifficulty, )
    return (
        <div className="main-content">
            <h1>alles</h1>
            <p>table chart alle opdrachten</p>
            <p>line chart van alle gemiddelde van alle opdrachten</p>
            {/* chart en line */}
        </div>
    )
}

export default Home