import React from "react";
import studentData from "./studentdata";

const StudentChart = ({ filterStudent }) => {
    // console.log(studentData);
    const data = studentData;
    console.log(filterStudent); //goede naam wordt doorgegeven
    const studentName = filterStudent;
    const assignmentList = [...new Set(data.map((item) => item.assignment))];

    const getStudentDetails = () => {
        const studentFilter = data.filter(
            (item) => item.student === studentName
        );
        console.log(studentFilter); 
        //nu assignments koppelen aan student met diff en fun rating
        const studentListDetails = assignmentList.map((assignment) => {
            const assignmentData = studentFilter.filter(
                (item) => assignment === item.assignment
            );
            const difficulty = assignmentData.map((d) => d.difficultyRating);
            const fun = assignmentData.map((f) => f.funRating);

            return {
                assignment:
                    assignment.length > 8
                        ? assignment.substring(0, assignment.indexOf(" "))
                        : assignment,
                difficultyRating: Number(difficulty[0]),
                funRating: Number(fun[0]),
            };
        });
        return studentListDetails;
    };

    const studentDetails = getStudentDetails();
    console.log(studentDetails);

    // // Add label
    const studentDetailsWithLabels = studentDetails.map((avg) => ({
        assignment: avg.assignment,
        difficultyRating: avg.difficultyRating,
        funRating: avg.funRating,
        label: `Opdracht ${avg.assignment}, difficultyRating: ${avg.difficultyRating}, enjoymentRating: ${avg.funRating}`,
    }));

    console.log(studentDetailsWithLabels);

    return <div>student chart</div>;
};

export default StudentChart;
