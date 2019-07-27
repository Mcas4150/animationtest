import React, { Component } from "react";

export default class SecondaryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // open: true,
      // currentColor: "white"
    };
    // this.handleUnClick = this.handleUnClick.bind(this);
    // this.changeRelease = this.changeRelease.bind(this);
  }

  // componentDidMount() {
  //   this.props.getReleases();
  //   anime({
  //     targets: ".navMenu--link",
  //     translateX: -250
  //   });
  // }

  render() {
    const { started } = this.props;
    return (
      <div
        className="secondary-container"
        style={started? styles.end : styles.start}
      />
    );
  }
}




const styles = {
  start: {
    position: "fixed",
    bottom: 0,
    left: 0,
    // gridArea: "secondary",
    height: "37.5vh",
    width: "100vw",
    backgroundColor: "lightgrey",
    transition: "all 1s ease-out, backgroundColor 3.5s ease-in"
  },
  end: {
    // gridArea: "secondary",
    position: "fixed",
    bottom: 0,
    left: 0,
    height: "100vh",
    width: "33vw",
    backgroundColor: "grey",
    transition: "all 1s ease-out, backgroundColor 3.5s ease-out"
  }
};
