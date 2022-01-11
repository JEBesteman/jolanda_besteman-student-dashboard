import React from "react";
import {
    VictoryBar,
    VictoryAxis,
    VictoryGroup,
    VictoryLine,
    VictoryChart,
    VictoryLabel,
    VictoryTooltip,
    VictoryZoomContainer,
} from "victory";

class StudentChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fun: true,
            difficult: true,
        };
    }

    handleChange = (event) => {
        const value = event.target.value;
        if (value === "difficult") {
            this.setState((prevState) => ({ difficult: !prevState.difficult }));
        }
        if (value === "fun") {
            this.setState((prevState) => ({ fun: !prevState.fun }));
        }
    };

    render() {
        const {studentDetailsWithLabels, studentDetails} = this.props;
        return (
            <div className="chartContainer">
                <VictoryChart
                    domainPadding={20}
                    width={1200}
                    domain={{ y: [0, 5] }}
                    containerComponent={
                        <VictoryZoomContainer
                            zoomDimension="x"
                            allowPan={false}
                        />
                    }
                >
                    <VictoryGroup offset={10}>
                        {this.state.difficult ? (
                            <VictoryBar
                                labelComponent={
                                    <VictoryTooltip flyoutWidth={150} />
                                }
                                data={studentDetailsWithLabels}
                                x="assignment"
                                y="difficultyRating"
                                labels={studentDetailsWithLabels.map(
                                    (item) => item.labelDif
                                )}
                                cornerRadius={{ topLeft: 8, topRight: 8 }}
                                style={{
                                    data: {
                                        width: 15,
                                        fill: "#004DFF",
                                        fillOpacity: 0.8,
                                    },
                                }}
                            />
                        ) : null}
                        {this.state.fun ? (
                            <VictoryBar
                                labelComponent={
                                    <VictoryTooltip flyoutWidth={150} />
                                }
                                data={studentDetailsWithLabels}
                                x="assignment"
                                y="funRating"
                                labels={studentDetailsWithLabels.map(
                                    (item) => item.labelFun
                                )}
                                cornerRadius={{ topLeft: 8, topRight: 8 }}
                                style={{
                                    data: {
                                        width: 15,
                                        fill: "#FFAE00",
                                        fillOpacity: 0.8,
                                    },
                                }}
                            />
                        ) : null}
                    </VictoryGroup>
                    <VictoryAxis
                        style={{
                            ticks: {
                                fill: "transparent",
                                size: 2,
                                stroke: "black",
                                strokeWidth: 1,
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            },
                        }}
                        tickFormat={studentDetailsWithLabels.map(
                            (item) => item.assignment
                        )}
                        tickLabelComponent={
                            <VictoryLabel angle={40} textAnchor="start" />
                        }
                    />
                    <VictoryAxis
                        dependentAxis
                        style={{
                            ticks: {
                                fill: "transparent",
                                size: 2,
                                stroke: "black",
                                strokeWidth: 1,
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            },
                        }}
                    />
                </VictoryChart>
                <br />
                <div className="chartText">
                    <label className="labelChartTextDif">
                        <input
                            className="accent"
                            type="checkbox"
                            onChange={this.handleChange}
                            value="difficult"
                            defaultChecked
                        />{" "}
                        Show Difficulty
                    </label>
                    <label className="labelChartTextFun">
                        <input
                            className="accent"
                            type="checkbox"
                            onChange={this.handleChange}
                            value="fun"
                            defaultChecked
                        />{" "}
                        Show Funfactor
                    </label>
                </div>
                <VictoryChart
                    domainPadding={20}
                    width={1200}
                    domain={{ y: [0, 5], x: [0, 56] }}
                    containerComponent={
                        <VictoryZoomContainer
                            zoomDimension="x"
                            allowPan={false}
                        />
                    }
                >
                    {this.state.difficult ? (
                        <VictoryLine
                            style={{
                                data: { stroke: "#004DFF" },
                                parent: { border: "2px solid #ccc" },
                            }}
                            data={studentDetails}
                            x="assignment"
                            y="difficultyRating"
                        />
                    ) : null}
                    {this.state.fun ? (
                        <VictoryLine
                            style={{
                                data: { stroke: "#FFAE00" },
                                parent: { border: "2px solid #ccc" },
                            }}
                            data={studentDetails}
                            x="assignment"
                            y="funRating"
                        />
                    ) : null}
                    <VictoryAxis
                        style={{
                            ticks: {
                                fill: "transparent",
                                size: 2,
                                stroke: "black",
                                strokeWidth: 1,
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            },
                        }}
                        tickFormat={studentDetails.map(
                            (item) => item.assignment
                        )}
                        tickLabelComponent={
                            <VictoryLabel angle={40} textAnchor="start" />
                        }
                    />
                    <VictoryAxis
                        dependentAxis
                        style={{
                            ticks: {
                                fill: "transparent",
                                size: 2,
                                stroke: "black",
                                strokeWidth: 1,
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            },
                            grid: { stroke: "rgb(173, 173, 173)" },
                        }}
                    />
                </VictoryChart>
            </div>
        );
    }
}

export default StudentChart;
