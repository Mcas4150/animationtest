import React, { Component } from "react";
import styled from "@emotion/styled";
import Canvas from "./Canvas";

export default class PrimaryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyle: styles.start
    };
  }

  render() {
    const { started } = this.props;
    return (
      <div
        className="primary-container"
        style={started ? styles.end : styles.start}
      >
        <div style={styles.centered}>
          {started ? (
            <CanvasContainer>
              <Canvas />
            </CanvasContainer>
          ) : (
            <Box>
              <Header>Strategic Partnerships</Header>
              <Description>
                Our partnership with these highly regarded companies can lead us
                to more traction and elevate our brand image by association.
              </Description>
            </Box>
          )}
        </div>
      </div>
    );
  }
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 3px white;
  height: 45vh;
  width: 75vw;
  margin: 35px;
  margin-top: 75px;
  padding: 50px;
`;

const Header = styled.div`
  color: white;
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  padding-top: 40px;
`;

const Description = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
  max-width: 600px;
  margin-top: 40px;
  letter-spacing: 2px;
`;

const CanvasContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const styles = {
  centered: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center"
  },
  start: {
    top: 0,
    position: "fixed",
    right: 0,
    zIndex: 3,
    height: "62.5vh",
    width: "100vw",
    backgroundColor: "grey",
    transition: "all 1s ease-in-out, backgroundColor 1.5s ease-in",
    WebkitTransition: "all 1s ease-in-out, backgroundColor 1.5s ease-in"
  },
  end: {
    position: "fixed",
    top: 0,
    right: 0,
    zIndex: 3,
    height: "100vh",
    width: "67vw",
    backgroundColor: "white",
    transition: "all 1s ease-in-out, backgroundColor 1.5s ease-out",
    WebkitTransition: "all 1s ease-in-out, backgroundColor 1.5s ease-out"
  }
};
