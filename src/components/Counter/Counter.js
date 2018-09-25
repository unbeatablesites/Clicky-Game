import React from "react";
import Image from "./Image";

class Counter extends React.Component {
    state = {
        count: 0
    };

    handIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div className="card text-center">
                <div className="card-header bg-orimary text-white">
                </div>
                <div className="card-body">
                    <p className="card-text">Score: {this.state.count} </p>
                </div>
            </div>
        )
    };
};

export default Counter;