import React from "react";
import img from "../assets/IEEE-Logo.png";

function Nav() {
    return (
        <nav>
            <div className="navContent">
                <img className="logo" src={img} alt="IEEE" />
                <div className="navText">
                    IEEE AAST Alex SB - webite form demo
                </div>
            </div>
        </nav>
    );
}

export default Nav;
