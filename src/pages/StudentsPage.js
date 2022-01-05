import React from "react";
import { Link } from "react-router-dom";

const StudentsPage = () => {
    //dynamisch maken!!
    return (
        <div>
            <h1>All students</h1>
            <ul>
                <li><Link to="/students/Aranka">Aranka</Link></li>
                <li><Link to="/students/Sandra">Sandra</Link></li>
                <li><Link to="/students/Storm">Storm</Link></li>

            </ul>
        </div>
    )
}

export default StudentsPage