import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <nav>
                <ul>
                    <li>
                        {" "}
                        <NavLink
                            className={(navData) =>
                                navData.isActive ? classes.active : ""
                            }
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        {" "}
                        <NavLink
                            className={(navData) =>
                                navData.isActive ? classes.active : ""
                            }
                            to="/students"
                        >
                            Students
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
