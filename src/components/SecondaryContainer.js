import React, { Component } from "react";
import logo from "../x-logo.png";

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
              className="secondary--title"
              style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                textAlign: "center",
                fontSize: "3rem",
                color: "white"
              }}
            >
              Marketing Strategies
            </div>
          ) : (
            <div
              className="secondary--components"
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                marginTop: "-70px"
              }}
            >
              <div
                className="secondary--component"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justiftyContent: "center",
                  margin: "25px",
                  zIndex:"5"
                }}
              >
                <div
                  style={{
                    color: "turquoise",
                    fontSize: "1.5rem",
                    marginBottom: "25px"
                  }}
                >
                  Component 1
                </div>
                <img src={logo} alt={"logo"} style={{ width: "150px" }} />
              </div>
              <div
                className="secondary--component"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justiftyContent: "center",
                  margin: "25px",
                  zIndex:"5"
                }}
              >
                <div
                  style={{
                    color: "turquoise",
                    fontSize: "1.5rem",
                    marginBottom: "25px"
                  }}
                >
                  Component 2
                </div>
                <img src={logo} alt={"logo"} style={{ width: "150px" }} />
              </div>
              <div
                className="secondary--component"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justiftyContent: "center",
                  margin: "25px",
                  zIndex: "5"
                }}
              >
                <div
                  style={{
                    color: "turquoise",
                    fontSize: "1.5rem",
                    marginBottom: "25px"
                  }}
                >
                  Component 3
                </div>
                <img src={logo} alt={"logo"} style={{ width: "150px" }} />
              </div>

              <div
                className="secondary--component"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justiftyContent: "center",
                  margin: "25px",
                  zIndex: "5"
                }}
              >
                <div
                  style={{
                    color: "turquoise",
                    fontSize: "1.5rem",
                    marginBottom: "25px"
                  }}
                >
                  Component 4
                </div>
                <img src={logo} alt={"logo"} style={{ width: "150px" }} />
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
    position: "fixed",
    bottom: 0,
    left: 0,
    // zIndex: 2,
    height: "37.5vh",
    width: "100vw",
    backgroundColor: "lightgrey",
    transition: "all 1s ease-in-out, backgroundColor 1.5s ease-in"
  },
  end: {
    position: "fixed",
    bottom: 0,
    left: 0,

    height: "100vh",
    width: "33vw",
    backgroundColor: "grey",
    transition: "all 1s ease-in-out, backgroundColor 1.5s ease-out"
  }
};
