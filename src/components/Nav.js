import React from "react";
import img from "../imgs/IEEE-Logo.png";
import "../styling/nav.module.scss";

function Nav() {
    return (
        <nav>
            <img className="logo" src={img} alt="IEEE" />
            <div className="navText">IEEE AAST Alex SB - webite form demo</div>
        </nav>
    );
}

export default Nav;
