import React, { Component } from "react";
import logo from "../x-logo.png";
import backgroundPhoto from "../backgroundphoto.png";
import styled from "@emotion/styled";
import { font, color } from "../shared/style";
import { FlexAlignCenter, MediaQ } from "../shared/components";

export default class SecondaryContainer extends Component {
  render() {
    const { started } = this.props;
    return (
      <ComponentContainer started={started}>
        {started ? (
          <HeaderContainer>
            <Header>Marketing Strategies</Header>
          </HeaderContainer>
        ) : (
          <ItemsContainer>
            <Item>
              <Title>Component 1</Title>
              <Image src={logo} alt={"logo"} />
            </Item>
            <Item>
              <Title>Component 2</Title>
              <Image src={logo} alt={"logo"} />
            </Item>
            <Item>
              <Title>Component 3</Title>
              <Image src={logo} alt={"logo"} />
            </Item>

            <Item>
              <Title>Component 4</Title>
              <Image src={logo} alt={"logo"} />
            </Item>
          </ItemsContainer>
        )}
      </ComponentContainer>
    );
  }
}

const ComponentContainer = styled.div(props => ({
  position: "fixed",
  bottom: 0,
  left: 0,
  height: props.started ? "100vh" : "37.5vh",
  width: props.started ? "33vw" : "100vw",
  backgroundColor: props.started ? color.grey : color.lightgrey,
  backgroundImage: props.started ? `url(${backgroundPhoto})` : "",
  backgroundSize: `cover`,
  transition: `backgroundColor 1s, backgroundImage 1s, height 1s, width 1s `,
  WebkitTransition: `backgroundColor 1s, backgroundImage 1s, height 1s, width 1s `,
  [MediaQ[2]]: {
    width: "100vw",
    height: "25vh",
    bottom: !props.started && 0,
    top: props.started && 0,
    transition: `backgroundColor 1s, height 1s, width 1s `,
    WebkitTransition: `backgroundColor 1s, height 1s, width 1s `
  }
}));

const HeaderContainer = styled(FlexAlignCenter)`
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  transition: height 1s ease-in-out;
  ${MediaQ[2]} {
    height: 25vh;
  }
`;

const Header = styled.div`
  font-size: ${font.l};
  color: ${color.white};
  padding: 50px;
`;

const ItemsContainer = styled(FlexAlignCenter)`
  justify-content: center;
  margin-top: -75px;
`;

const Item = styled(FlexAlignCenter)`
  flex-direction: column;
  margin: 25px;
`;

const Title = styled.div`
  color: ${color.blue};
  font-size: ${font.s};
  margin-bottom: 25px;
`;

const Image = styled.img`
  width: 150px;
`;
