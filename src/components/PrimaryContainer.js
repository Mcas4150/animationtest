import React, { Component } from "react";

export default class PrimaryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyle: styles.start
    };

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
        className="primary-container"
        style={started? styles.end : styles.start}
      />
    );
  }
}


const styles = {
  start: {
    top: 0,
    position: "fixed",
    right: 0,
    // gridArea: "primary",
    height: "62.5vh",
    width: "100vw",
    backgroundColor: "grey",
    transition: "all 1s ease-out, backgroundColor 3.5s ease-in"
  },
  end: {
    // gridArea: "primary",
    position: "fixed",
    top: 0,
    right: 0,
    height: "100vh",
    width: "67vw",
    backgroundColor: "lightgrey",
    transition: "all 1s ease-out, backgroundColor 3.5s ease-out"
  }
};
