import React from "react";
import studentData from "./studentdata";

class StudentChart2 extends React.Component {
    constructor() {
        super();
        this.state = {
            fun: true,
            difficult: true,
        };
    }

    //functie om fun en diff aan en uit te zetten..

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
        const data = studentData;
        //hoe geeft ik filterStudent goed door???
        const studentName = this.props.filterStudent;
        console.log(studentName)

        const assignmentList = [
            ...new Set(data.map((item) => item.assignment)),
        ];

        const getStudentDetails = () => {
            const studentFilter = data.filter(
                (item) => item.student === studentName
            );
            console.log("filterstudent", studentFilter);
            //nu assignments koppelen aan student met diff en fun rating
            const studentListDetails = assignmentList.map((assignment) => {
                const assignmentData = studentFilter.filter(
                    (item) => assignment === item.assignment
                );
                const difficulty = assignmentData.map(
                    (d) => d.difficultyRating
                );
                const fun = assignmentData.map((f) => f.funRating);
                console.log(difficulty);
                return {
                    assignment:
                        assignment.length > 8
                            ? assignment.substring(0, assignment.indexOf(" "))
                            : assignment,
                    difficultyRating: Number(difficulty[0]),
                    funRating: Number(fun[0]),
                };
            });
            console.log(studentListDetails);
            return studentListDetails;
        };

        const studentDetails = getStudentDetails();
        console.log(studentDetails);

        // Add label
        const studentDetailsWithLabels = studentDetails.map((avg) => ({
            assignment: avg.assignment,
            difficultyRating: avg.difficultyRating,
            funRating: avg.funRating,
            label: `Opdracht ${avg.assignment}, difficultyRating: ${avg.difficultyRating}, enjoymentRating: ${avg.funRating}`,
        }));
        console.log(studentDetailsWithLabels)

        return (
            <div>
                <p>chart</p>
                {/* conditional rendering */}
                {/* {this.state.difficult ? (<VictoryBar diff/>) : null */}
                {/* {this.state.fun ? (<VictoryBar fun/>) : null */}
                <div>
                    <input
                        type="checkbox"
                        onChange={this.handleChange}
                        value="difficult"
                        checked={this.state.difficult}
                    />{" "}
                    Verwijder difficult
                    <br />
                    <input
                        type="checkbox"
                        onChange={this.handleChange}
                        value="fun"
                        checked={this.state.fun}
                    />{" "}
                    Verwijder fun
                </div>
            </div>
        );
    }
}

export default StudentChart2;
