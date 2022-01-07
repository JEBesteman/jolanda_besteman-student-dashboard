import React from "react";
import studentData from "./studentdata";

const Chart = () => {
    const data = studentData;
    //unigue assignment names
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
    console.log(averageRatingAssigments);

    // // Add label
    const averageRatingAssigmentsWithLabels = averageRatingAssigments.map(
        (avg) => ({
            assignment: avg.assignment,
            difficultyRating: avg.difficultyRating,
            funRating: avg.funRating,
            label: `Opdracht ${avg.assignment}, difficultyRating: ${avg.difficultyRating}, enjoymentRating: ${avg.funRating}`,
        })
    );
    console.log("chart", averageRatingAssigmentsWithLabels);

    return <div>Chart</div>;
};

export default Chart;
