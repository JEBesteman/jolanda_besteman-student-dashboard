import React from "react";
import { useParams } from "react-router-dom";
import StudentChart from "../components/ChartStudent";

const StudentDetail = ({ data }) => {
    const { studentName } = useParams();

    const assignmentList = [...new Set(data.map((item) => item.assignment))];

    const getStudentDetails = () => {
        const studentFilter = data.filter(
            (item) => item.student === studentName
        );

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

    //add label
    const studentDetailsWithLabels = studentDetails.map((avg) => ({
        assignment: avg.assignment,
        difficultyRating: avg.difficultyRating,
        funRating: avg.funRating,
        labelDif: `assignment ${avg.assignment}, difficultyRating: ${avg.difficultyRating}`,
        labelFun: `assignment ${avg.assignment}, enjoymentRating: ${avg.funRating}`,
    }));

    return (
        <div>
            <h2>Student: {studentName}</h2>
            <p>scroll to zoom</p>
            <StudentChart
                studentDetails={studentDetails}
                studentDetailsWithLabels={studentDetailsWithLabels}
            />
        </div>
    );
};

export default StudentDetail;
