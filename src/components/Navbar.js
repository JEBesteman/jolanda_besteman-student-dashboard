import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
            <ul>
                <li>
                    {" "}
                    <Link to="/">Home</Link>
                </li>
                <li>
                    {" "}
                    <Link to="/students">Students</Link>
                </li>
            </ul>
            </nav>
        </div>
    );
};

export default Navbar;
