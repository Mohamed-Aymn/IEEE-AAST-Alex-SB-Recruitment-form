import React from "react";
import img from "../assets/IEEE-Logo.png";

function Nav() {
    return (
        <nav>
            <div className="navContent">
                <img className="logo" src={img} alt="IEEE" />
                <div className="navText">
                    IEEE AAST Alex SB <span>- Recruitment form demo</span>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
