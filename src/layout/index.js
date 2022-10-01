import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

function layout(props) {
    return (
        <main>
            <Nav />
            <div className="page">{props.children}</div>
            <Footer />
        </main>
    );
}

export default layout;
