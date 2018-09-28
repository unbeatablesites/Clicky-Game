import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
    <div className="jumbotron">{props.children}
        <h1 className="display-4">Clicky Game!</h1>
        <p className="lead">The goal is to reach 12 points. Once you get to 12 points you win! Oh yeah dont click the same picture twice or you lose! Have fun!!</p>
    </div>
)
export default Jumbotron;
