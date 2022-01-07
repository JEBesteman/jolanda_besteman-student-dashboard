import React from "react";
import studentData from "./studentdata";

class Chart extends React.Component {
    constructor() {
        super()
        this.state = {
          fun: true,
          difficult: true
        }
      }

    data = studentData;
    //unigue assignment names
    assignmentList = [...new Set(this.data.map((item) => item.assignment))];

    getAveragesAssignments = () => {
        const averagesAssignmentList = this.assignmentList.map((assignment) => {
            const assignmentData = this.data.filter(
                (item) => assignment === item.assignment
            );
            console.log(assignmentData)
            const difficulty = assignmentData.map((d) => d.difficultyRating);
            const fun = assignmentData.map((f) => f.funRating);
            console.log(fun)
            const totalDifficultPerAssignment = difficulty.reduce(
                (accumulator, currentValue) => accumulator + currentValue, 0);
            const totalFunPerAssignment = fun.reduce(
                (accumulator, currentValue) => accumulator + currentValue, 0);

            const valueDifficult = totalDifficultPerAssignment / difficulty.length;
            const valueFun = totalFunPerAssignment / fun.length;
            const averageDifficultyRating = valueDifficult.toFixed(1);
            const averageFunRating = valueFun.toFixed(1);
            console.log(averageDifficultyRating)
            return {
                assignment:
                    assignment.length > 8
                        ? assignment.substring(0, assignment.indexOf(" "))
                        : assignment,

                difficultyRating: Number(averageDifficultyRating),
                funRating: Number(averageFunRating),
            };
        });
        console.log(averagesAssignmentList)
        return averagesAssignmentList;
    };
    
    averageRatingAssigments = this.getAveragesAssignments();

    // Add label
    averageRatingAssigmentsWithLabels = this.averageRatingAssigments.map(
        (avg) => ({
            assignment: avg.assignment,
            difficultyRating: avg.difficultyRating,
            funRating: avg.funRating,
            label: `Opdracht ${avg.assignment}, difficultyRating: ${avg.difficultyRating}, enjoymentRating: ${avg.funRating}`,
        })
    );
    // console.log("chart", averageRatingAssigmentsWithLabels);

    handleChange = (event) => {
        const target = event.target.value;
        if (target === "difficult"){
            console.log("diff changed")
            this.setState(prevState => ({difficult: !prevState.difficult}))
        }
        if (target === "fun"){
            console.log("fun changed")
            this.setState(prevState => ({fun: !prevState.fun}))
        }
    }

    render() {
        return (
            <div>
                <p>chart</p>
                {/* conditional rendering */}
                {/* {this.state.difficult ? (<VictoryBar diff/>) : null */}
                {/* {this.state.fun ? (<VictoryBar fun/>) : null */}
            <div>
                <input type="checkbox" onChange={this.handleChange} value="difficult" checked={this.state.difficult}/> Verwijder difficult
                <br />
                <input type="checkbox" onChange={this.handleChange} value="fun" checked={this.state.fun}/> Verwijder fun
            </div>
            </div>)
    }
};

export default Chart;
