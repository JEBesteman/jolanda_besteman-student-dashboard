import React from "react";
import { useParams } from "react-router-dom";

const StudentDetail = () => {
    const {studentName} = useParams();
    
    return (
        <div>
            <h1>student: {studentName}</h1>
            <p>table chart alle opdrachten</p>
            {/* nog chart van student */}
        </div>
    )
}

export default StudentDetail