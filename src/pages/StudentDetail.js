import React from "react";
import { useParams } from "react-router-dom";
import StudentChart3 from "../components/ChartStudent3";
// import StudentChart from "../data/StudentChart";

const StudentDetail = ({data}) => {
    const { studentName } = useParams();
    console.log("studentdetail", data)

    console.log(studentName);
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

    //add label
    const studentDetailsWithLabels = studentDetails.map((avg) => ({
        assignment: avg.assignment,
        difficultyRating: avg.difficultyRating,
        funRating: avg.funRating,
        labelDif: `assignment ${avg.assignment}, difficultyRating: ${avg.difficultyRating}`,
        labelFun: `assignment ${avg.assignment}, enjoymentRating: ${avg.funRating}`,
    }));
    console.log(studentDetailsWithLabels)








    return (
        <div>
            <h1>student: {studentName}</h1>
            <p>table chart alle opdrachten</p>
            {/* <StudentChart filterStudent={studentName} /> */}
            <StudentChart3 filterStudent={studentName} studentDetails={studentDetails}
            studentDetailsWithLabels={studentDetailsWithLabels} />
        </div>
    );
};

export default StudentDetail;
