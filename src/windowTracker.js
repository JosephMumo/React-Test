import React, { Component } from "react";

class WindowTracker extends Component {
    state = {
        windowWidth: window.innerWidth
    }

    watchWidth = () => {
        this.setState({windowWidth: window.innerWidth})
    }
    
    componentDidMount() {
        window.addEventListener('resize', this.watchWidth)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.watchWidth)
    }

    render() {
        return(
            <h1>{this.state.windowWidth}</h1>
        )
    }
}
export default WindowTracker