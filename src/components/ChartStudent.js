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

class StudentChart3 extends React.Component {
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
                                    <VictoryTooltip flyoutWidth={275} />
                                }
                                data={this.props.studentDetailsWithLabels}
                                x="assignment"
                                y="difficultyRating"
                                labels={this.props.studentDetailsWithLabels.map(
                                    (item) => item.labelDif
                                )}
                                cornerRadius={{ topLeft: 10, topRight: 10 }}
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
                                    <VictoryTooltip flyoutWidth={275} />
                                }
                                data={this.props.studentDetailsWithLabels}
                                x="assignment"
                                y="funRating"
                                labels={this.props.studentDetailsWithLabels.map(
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
                        tickFormat={this.props.studentDetailsWithLabels.map(
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
                    <div
                        style={{
                            backgroundColor: "#004DFF",
                            color: "white",
                            borderRadius: "20px",
                            width: "150px",
                        }}
                    >
                        <input
                            type="checkbox"
                            onChange={this.handleChange}
                            value="difficult"
                            checked={this.state.difficult}
                        />{" "}
                        Show Difficulty
                    </div>
                    <div
                        style={{
                            backgroundColor: "#FFAE00",
                            borderRadius: "20px",
                            width: "150px",
                        }}
                    >
                        <input
                            type="checkbox"
                            onChange={this.handleChange}
                            value="fun"
                            checked={this.state.fun}
                        />{" "}
                        Show Funfactor
                    </div>
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
                            data={this.props.studentDetails}
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
                            data={this.props.studentDetails}
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
                        tickFormat={this.props.studentDetails.map(
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
                            grid: { stroke: "rgb(221, 221, 221)" },
                        }}
                    />
                </VictoryChart>
            </div>
        );
    }
}

export default StudentChart3;
