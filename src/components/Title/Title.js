import React, {Component} from "react";
import "./Title.css";

class Title extends Component {
    render() {
        return(
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="leftItem">Test Your Memory!</div>
                <div className="centerItem"></div>
                <div className="rightItem">Score: {this.props.score}</div>
            </nav>
        )};
};

export default Title;