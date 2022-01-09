import React from "react";
import { Link } from "react-router-dom";

const StudentsPage = ({ students, data }) => {
    console.log("studentPage", data)
    const studentLinks = students.map((student, index) => {
        const linkNav = `/students/${student.toString()}`;
        return (
            <li key={index}>
                <Link to={linkNav}>{student}</Link>
            </li>
        );
    });

    return (
        <div>
            <h1>All students</h1>
            <ul className="grid">{studentLinks}</ul>
        </div>
    );
};

export default StudentsPage;
