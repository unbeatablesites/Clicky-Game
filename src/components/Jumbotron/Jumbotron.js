import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
    <div className="jumbotron">{props.children}
        <h1 className="display-4">Clicky Game!</h1>
        <p className="lead">Click on an image to earn points, but don't clikc on an image more than once!</p>
    </div>
)
export default Jumbotron;