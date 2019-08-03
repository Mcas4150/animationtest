import React, { Component } from "react";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryContainer from "./SecondaryContainer";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startAnimation: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      startAnimation: !prevState.startAnimation
    }));
  }

  render() {
    const { startAnimation } = this.state;
    return (
      <div onClick={this.handleClick}>
        <PrimaryContainer started={startAnimation} />
        <SecondaryContainer started={startAnimation} />
      </div>
    );
  }
}
