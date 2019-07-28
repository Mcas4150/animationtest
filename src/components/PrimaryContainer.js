import React, { Component } from "react";
import Canvas from "./Canvas";

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
        style={started ? styles.end : styles.start}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center"
          }}
        >
          {started ? (
            <div
              className="primary--canvas-container"
              style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                marginTop: "25%"
              }}
            >
              <Canvas active={started} />
            </div>
          ) : (
            <div
              className="primary--box"
              style={{
                display: "flex",

                flexDirection: "column",
                alignItems: "center",
                border: "solid 1px white",
                height: "40vh",
                width: "80vw",
                margin: "35px",
                padding: "50px"
              }}
            >
              <div
                style={{
                  color: "white",
                  fontSize: "3rem",
                  fontWeight: "600",
                  textAlign: "center"
                }}
              >
                Strategic Partnerships
              </div>
              <div
                style={{
                  color: "white",
                  fontSize: "1.5rem",
                  fontWeight: "300",
                  textAlign: "center",
                  maxWidth: "500px",
                  marginTop: "35px"
                }}
              >
                Our partnership with these highly regarded companies can lead us
                to more traction and elevate our brand image by association.
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const styles = {
  start: {
    top: 0,
    position: "fixed",
    right: 0,

    height: "62.5vh",
    width: "100vw",
    backgroundColor: "grey",
    transition: "all 1s ease-out, backgroundColor 3.5s ease-in"
  },
  end: {
    position: "fixed",
    top: 0,
    right: 0,
    height: "100vh",
    width: "67vw",
    backgroundColor: "white",
    transition: "all 1s ease-out, backgroundColor 3.5s ease-out"
  }
};
