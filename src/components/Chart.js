import React from "react";
// import studentData from "./studentdata";
import {
    VictoryBar,
    VictoryChart,
    VictoryAxis,
    VictoryGroup,
    VictoryTooltip,
    VictoryLine,
    VictoryZoomContainer,
    VictoryLabel,
} from "victory";

class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fun: true,
            difficult: true,
        };
    }

    // data = studentData;
    // //unigue assignment names
    // assignmentList = [...new Set(this.data.map((item) => item.assignment))];

    // getAveragesAssignments = () => {
    //     const averagesAssignmentList = this.assignmentList.map((assignment) => {
    //         const assignmentData = this.data.filter(
    //             (item) => assignment === item.assignment
    //         );
    //         console.log(assignmentData);
    //         const difficulty = assignmentData.map((d) => d.difficultyRating);
    //         const fun = assignmentData.map((f) => f.funRating);
    //         console.log(fun);
    //         const totalDifficultPerAssignment = difficulty.reduce(
    //             (accumulator, currentValue) => accumulator + currentValue,
    //             0
    //         );
    //         const totalFunPerAssignment = fun.reduce(
    //             (accumulator, currentValue) => accumulator + currentValue,
    //             0
    //         );

    //         const valueDifficult =
    //             totalDifficultPerAssignment / difficulty.length;
    //         const valueFun = totalFunPerAssignment / fun.length;
    //         const averageDifficultyRating = valueDifficult.toFixed(1);
    //         const averageFunRating = valueFun.toFixed(1);
    //         console.log(averageDifficultyRating);

    //         return {
    //             assignment:
    //                 assignment.length > 8
    //                     ? assignment.substring(0, assignment.indexOf(" "))
    //                     : assignment,
    //             difficultyRating: Number(averageDifficultyRating),
    //             funRating: Number(averageFunRating),
    //         };
    //     });
    //     console.log(averagesAssignmentList);
    //     return averagesAssignmentList;
    // };

    // averageRatingAssigments = this.getAveragesAssignments();

    // // Add label
    // averageRatingAssigmentsWithLabels = this.averageRatingAssigments.map(
    //     (avg) => ({
    //         assignment: avg.assignment,
    //         difficultyRating: avg.difficultyRating,
    //         funRating: avg.funRating,
    //         labelDif: `assignment ${avg.assignment}, difficultyRating: ${avg.difficultyRating}`,
    //         labelFun: `assignment ${avg.assignment}, enjoymentRating: ${avg.funRating}`,
    //     })
    // );

    handleChange = (event) => {
        const target = event.target.value;
        if (target === "difficult") {
            console.log("diff changed");
            this.setState((prevState) => ({ difficult: !prevState.difficult }));
        }
        if (target === "fun") {
            console.log("fun changed");
            this.setState((prevState) => ({ fun: !prevState.fun }));
        }
    };

    render() {
        console.log(this.props.averageRatingAssigments);
        console.log(this.props.averageRatingAssigmentsWithLabels);
        return (
            <div>
                <p>chart</p>
                <div className="chart">
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
                                        <VictoryTooltip flyoutWidth={300} />
                                    }
                                    data={
                                        this.props.averageRatingAssigmentsWithLabels
                                    }
                                    x="assignment"
                                    y="difficultyRating"
                                    labels={this.props.averageRatingAssigmentsWithLabels.map(
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
                                        <VictoryTooltip flyoutWidth={400} />
                                    }
                                    data={
                                        this.props.averageRatingAssigmentsWithLabels
                                    }
                                    x="assignment"
                                    y="funRating"
                                    labels={this.props.averageRatingAssigmentsWithLabels.map(
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
                            tickFormat={this.props.averageRatingAssigmentsWithLabels.map(
                                (item) => item.assignment
                            )}
                            tickLabelComponent={
                                <VictoryLabel angle={40} textAnchor="start" />
                            }
                        />
                        <VictoryAxis dependentAxis />
                    </VictoryChart>
                    <br />
                    <div className="contentText">
                        <div
                            style={{
                                backgroundColor: "#004DFF",
                                color: "white",
                                borderRadius: "20px",
                                width: "155px",
                            }}
                        >
                            <p>Difficulty</p>
                        </div>
                        <div
                            style={{
                                backgroundColor: "#FFAE00",
                                borderRadius: "20px",
                                width: "155px",
                            }}
                        >
                            <p>Funfactor</p>
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
                            data={this.props.averageRatingAssigments}
                            x="assignment"
                            y="difficultyRating"
                        /> ) : null }
                        {this.state.fun ? (
                        <VictoryLine
                            style={{
                                data: { stroke: "#FFAE00" },
                                parent: { border: "2px solid #ccc" },
                            }}
                            data={this.props.averageRatingAssigments}
                            x="assignment"
                            y="funRating"
                        /> ) :  null }
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
                            tickFormat={this.props.averageRatingAssigments.map(
                                (item) => item.assignment
                            )}
                            tickLabelComponent={
                                <VictoryLabel angle={40} textAnchor="start" />
                            }
                        />
                        <VictoryAxis dependentAxis />
                    </VictoryChart>
                </div>
                <div>
                    <input
                        type="checkbox"
                        onChange={this.handleChange}
                        value="difficult"
                        checked={this.state.difficult}
                    />{" "}
                    Show Difficulty
                    <br />
                    <input
                        type="checkbox"
                        onChange={this.handleChange}
                        value="fun"
                        checked={this.state.fun}
                    />{" "}
                    Show Funfactor
                </div>
            </div>
        );
    }
}

export default Chart;
