import React from "react";
import Chart from "../components/Chart";

const HomePage = ({data}) => {

    const assignmentList = [...new Set(data.map((item) => item.assignment))];

    const getAveragesAssignments = () => {
        const averagesAssignmentList = assignmentList.map((assignment) => {
            const assignmentData = data.filter(
                (item) => assignment === item.assignment
            );

            const difficulty = assignmentData.map((d) => d.difficultyRating);
            const fun = assignmentData.map((f) => f.funRating);

            const totalDifficultPerAssignment = difficulty.reduce(
                (accumulator, currentValue) => accumulator + currentValue, 0);
            const totalFunPerAssignment = fun.reduce(
                (accumulator, currentValue) => accumulator + currentValue, 0);

            const valueDifficult = totalDifficultPerAssignment / difficulty.length;
            const valueFun = totalFunPerAssignment / fun.length;
            const averageDifficultyRating = valueDifficult.toFixed(1);
            const averageFunRating = valueFun.toFixed(1);

            return {
                assignment:
                    assignment.length > 8
                        ? assignment.substring(0, assignment.indexOf(" "))
                        : assignment,

                difficultyRating: Number(averageDifficultyRating),
                funRating: Number(averageFunRating),
            };
        });
        return averagesAssignmentList;
    };
    const averageRatingAssigments = getAveragesAssignments();

    // // Add label
    const averageRatingAssigmentsWithLabels = averageRatingAssigments.map(
        (avg) => ({
            assignment: avg.assignment,
            difficultyRating: avg.difficultyRating,
            funRating: avg.funRating,
            labelDif: `assignment ${avg.assignment}, difficultyRating: ${avg.difficultyRating}`,
            labelFun: `assignment ${avg.assignment}, enjoymentRating: ${avg.funRating}`,
        })
    );

    return (
        <div className="main-content">
            <p>table chart en line chart van alle gemiddelde van alle opdrachten</p>
            <p>scroll to zoom</p>
            <Chart averageRatingAssigments={averageRatingAssigments} averageRatingAssigmentsWithLabels={averageRatingAssigmentsWithLabels}/>
        </div>
    );
};

export default HomePage;
