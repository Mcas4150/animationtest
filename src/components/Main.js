import React, { Component } from "react";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryContainer from "./SecondaryContainer";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startAnimation: true
    };
    this.handleClick = this.handleClick.bind(this);
    // this.changeRelease = this.changeRelease.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      startAnimation: !prevState.startAnimation
    }));
  }

  render() {
    const { startAnimation } = this.state;
    return (
      <div
        className="Main"
        onClick={this.handleClick}
        style={startAnimation ? styles.end : styles.start}
      >
        <div style={{ gridArea: "primary" }}>
          <PrimaryContainer started={startAnimation} />
        </div>
        <div style={{ gridArea: "secondary" }}>
          <SecondaryContainer started={startAnimation} />
        </div>
      </div>
    );
  }
}

const styles = {
  start: {
    // display: "block",
    // transition: "all 1s ease-out"
    // gridTemplateRows: "3fr 1fr"
  },
  end: {
    // display: "flex",
    // transition: "all 1s ease-out"
  }
};
