import React from "react";
import { useParams } from "react-router-dom";
import StudentChart3 from "../data/ChartStudent3";
// import StudentChart from "../data/StudentChart";

const StudentDetail = () => {
    const { studentName } = useParams();

    return (
        <div>
            <h1>student: {studentName}</h1>
            <p>table chart alle opdrachten</p>
            {/* <StudentChart filterStudent={studentName} /> */}
            <StudentChart3 filterStudent={studentName} />
        </div>
    );
};

export default StudentDetail;
