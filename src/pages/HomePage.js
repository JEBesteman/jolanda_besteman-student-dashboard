import React from "react";
import Chart from "../data/Chart";

const HomePage = () => {
    return (
        <div className="main-content">
            <h1>alles</h1>
            <p>table chart alle opdrachten</p>
            <p>line chart van alle gemiddelde van alle opdrachten</p>
            {/* chart en line */}
            <Chart />
        </div>
    );
};

export default HomePage;
