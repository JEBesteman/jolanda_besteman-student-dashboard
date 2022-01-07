import React from "react";
import { useParams } from "react-router-dom";
import StudentChart from "../data/StudentChart";
import StudentChart2 from "../data/StudentChart2";

const StudentDetail = () => {
    const { studentName } = useParams();

    return (
        <div>
            <h1>student: {studentName}</h1>
            <p>table chart alle opdrachten</p>
            {/* nog chart van student */}
            {/* <StudentChart filterStudent={studentName} /> */}
            <StudentChart2 filterStudent={studentName} />
        </div>
    );
};

export default StudentDetail;
