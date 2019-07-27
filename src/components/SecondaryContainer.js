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
                justifyContent: "center",
                alignContent: "center",
                fontSize: "24px",
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
                alignContent: "center"
              }}
            >
              <div
                className="secondary--component"
                style={{ alignItems: "center" }}
              >
                <h2>Component 1</h2>
                <div> dumb image</div>
              </div>
              <div
                className="secondary--component"
                style={{ alignItems: "center" }}
              >
                <h2>Component 2</h2>
                <div> dumb image</div>
              </div>
              <div
                className="secondary--component"
                style={{ alignItems: "center" }}
              >
                <h2>Component 3</h2>
                <div> dumb image</div>
              </div>
              <div
                className="secondary--component"
                style={{ alignItems: "center" }}
              >
                <h2>Component 4</h2>
                <div> dumb image</div>
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

    height: "37.5vh",
    width: "100vw",
    backgroundColor: "lightgrey",
    transition: "all 1s ease-out, backgroundColor 3.5s ease-in"
  },
  end: {

    position: "fixed",
    bottom: 0,
    left: 0,
    height: "100vh",
    width: "33vw",
    backgroundColor: "grey",
    transition: "all 1s ease-out, backgroundColor 3.5s ease-out"
  }
};
