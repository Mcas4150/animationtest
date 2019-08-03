import React, { Component } from "react";
import logo from "../x-logo.png";
import styled from "@emotion/styled";

export default class SecondaryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { started } = this.props;
    return (
      <div
        className="secondary-container"
        style={started ? styles.end : styles.start}
      >
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
      </div>
    );
  }
}

const HeaderContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
`;

const Header = styled.div`
  font-size: 3rem;
  color: white;
`;

const ItemsContainer = styled.div`
  margin-top: -70px;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 25px;
  z-index: 5;
`;

const Title = styled.div`
  color: turquoise;
  font-size: 1.5rem;
  margin-bottom: 25px;
`;

const Image = styled.img`
  width: 150px;
`;

const styles = {
  start: {
    position: "fixed",
    bottom: 0,
    left: 0,
    // zIndex: 2,
    height: "37.5vh",
    width: "100vw",
    backgroundColor: "lightgrey",
    transition: "all 1s ease-in-out, backgroundColor 1.5s ease-in",
    WebkitTransition: "all 1s ease-in-out, backgroundColor 1.5s ease-in"
  },
  end: {
    position: "fixed",
    bottom: 0,
    left: 0,

    height: "100vh",
    width: "33vw",
    backgroundColor: "grey",
    transition: "all 1s ease-in-out, backgroundColor 1.5s ease-out",
    WebkitTransition: "all 1s ease-in-out, backgroundColor 1.5s ease-out"
  }
};
