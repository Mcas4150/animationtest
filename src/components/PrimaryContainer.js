import React, { Component } from "react";
import styled from "@emotion/styled";
import Canvas from "./Canvas";
import { font, color } from "../shared/style";
import { FlexAlignCenter } from "../shared/components";
export default class PrimaryContainer extends Component {
  render() {
    const { started } = this.props;
    return (
      <ComponentContainer started={started}>
        {started ? (
          <CanvasContainer>
            <Canvas />
          </CanvasContainer>
        ) : (
          <BoxContainer>
            <Box>
              <Header>Strategic Partnerships</Header>
              <Description>
                Our partnership with these highly regarded companies can lead us
                to more traction and elevate our brand image by association.
              </Description>
            </Box>
          </BoxContainer>
        )}
      </ComponentContainer>
    );
  }
}

const ComponentContainer = styled.div(props => ({
  position: "fixed",
  top: 0,
  right: 0,
  zIndex: 3,
  height: props.started ? "100vh" : "62.5vh",
  width: props.started ? "67vw" : "100vw",
  backgroundColor: props.started ? color.white : color.grey,
  transition: `all 1s ease-in-out, backgroundColor 1.5s ${
    props.started ? "ease-out" : "ease-in"
  }`,
  WebkitTransition: `all 1s ease-in-out, backgroundColor 1.5s ${
    props.started ? "ease-out" : "ease-in"
  }`
}));

const BoxContainer = styled(FlexAlignCenter)`
  justify-content: center;
`;

const Box = styled(FlexAlignCenter)`
  flex-direction: column;
  border: solid 3px ${color.white};
  height: 45vh;
  width: 75vw;
  margin: 35px;
  margin-top: 75px;
  padding: 50px;
`;

const Header = styled.div`
  color: ${color.white};
  font-size: ${font.m};
  font-weight: 600;
  text-align: center;
  padding-top: 40px;
`;

const Description = styled.div`
  color: ${color.white};
  font-size: ${font.s};
  font-weight: 300;
  text-align: center;
  max-width: 600px;
  margin-top: 40px;
  letter-spacing: 2px;
`;

const CanvasContainer = styled(FlexAlignCenter)`
  height: 100vh;
  justify-content: center;
`;
