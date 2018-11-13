import React, { Component } from "react";

class Clickygame extends Component {

    state = {
        count: 0
    };

    imageClick = () => {

        this.setState({ count: this.state.count + 1});
    };

    render() {
        return (
            
        )
    }
}