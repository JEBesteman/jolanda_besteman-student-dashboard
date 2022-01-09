import React from "react";
// import studentData from "./studentdata";
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

    studentName = this.props.filterStudent;
    //functie om fun en diff aan en uit te zetten..
    // data = studentData;
    // //hoe geeft ik filterStudent goed door???

    // assignmentList = [...new Set(this.data.map((item) => item.assignment))];

    // getStudentDetails = () => {
    //     const studentFilter = this.data.filter(
    //         (item) => item.student === this.studentName
    //     );
    //     // console.log("filterstudent", studentFilter);
    //     //nu assignments koppelen aan student met diff en fun rating
    //     const studentListDetails = this.assignmentList.map((assignment) => {
    //         const assignmentData = studentFilter.filter(
    //             (item) => assignment === item.assignment
    //         );
    //         const difficulty = assignmentData.map((d) => d.difficultyRating);
    //         const fun = assignmentData.map((f) => f.funRating);
    //         // console.log(difficulty);
    //         return {
    //             assignment:
    //                 assignment.length > 8
    //                     ? assignment.substring(0, assignment.indexOf(" "))
    //                     : assignment,
    //             difficultyRating: Number(difficulty[0]),
    //             funRating: Number(fun[0]),
    //         };
    //     });
    //     // console.log(studentListDetails);
    //     return studentListDetails;
    // };

    // studentDetails = this.getStudentDetails();

    // // Add label
    // studentDetailsWithLabels = this.studentDetails.map((avg) => ({
    //     assignment: avg.assignment,
    //     difficultyRating: avg.difficultyRating,
    //     funRating: avg.funRating,
    //     labelDif: `assignment ${avg.assignment}, difficultyRating: ${avg.difficultyRating}`,
    //     labelFun: `assignment ${avg.assignment}, enjoymentRating: ${avg.funRating}`,
    // }));

    handleChange = (event) => {
        const target = event.target.value;
        if (target === "difficult") {
            // console.log("diff changed");
            this.setState((prevState) => ({ difficult: !prevState.difficult }));
        }
        if (target === "fun") {
            // console.log("fun changed");
            this.setState((prevState) => ({ fun: !prevState.fun }));
        }
    };

    render() {
        // console.log(this.studentName);

        return (
            <div>
                <div>
                    <h3>{this.studentName}</h3>
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
                                        <VictoryTooltip flyoutWidth={400} />
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
                            data={this.props.studentDetails}
                            x="assignment"
                            y="difficultyRating"
                        /> ) : null }
                        {this.state.fun ? (
                        <VictoryLine
                            style={{
                                data: { stroke: "#FFAE00" },
                                parent: { border: "2px solid #ccc" },
                            }}
                            data={this.props.studentDetails}
                            x="assignment"
                            y="funRating"
                        /> ) : null }
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
                    Show Fun
                </div>
            </div>
        );
    }
}

export default StudentChart3;
