import React, { useState } from 'react';

import { Container, Row, Col } from 'reactstrap';
import Typing, { Cursor } from 'react-typing-animation';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import animationData from './lotties/2810-arrow-down.json';
import '../css/style.css';


import Portfolio from './Portfolio';

const HomeContainer = styled.div`
  height: 100vh
  background-color: black
  color: white
  text-align: center
`;

const MainText = styled.div`
  color: white
  text-align: center
  top: 50%
  left: 50%
  position: absolute
  transform: translate(-50%, -50%)
  font-size: 20rem
`;

const PortfolioContainer = styled.div`
  height: 100vh
  background-color: white
  color: black
`;

function Home() {
  const [doneTyping, setDoneTyping] = useState(0);


  const onDoneTyping = () => {
    setDoneTyping(doneTyping + 1);
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  let cursor;
  let arrow;

  if (doneTyping === 1) {
    cursor = <Cursor />;
    arrow = (
      <Lottie
        options={defaultOptions}
        height={200}
        width={200}
      />
    );
  } else {
    cursor = <div />;
    arrow = <div />;
  }

  return (

    <Container fluid>

      <HomeContainer className="Home">
        <MainText>
          <div>Noah Baldwin</div>
          <div>
            <Typing className="typed-text" speed={75} loop={false} onFinishedTyping={() => onDoneTyping()}>
              <span>Software Engineer</span>
              <Typing.Reset count={1} delay={1000} />
              <span>iOS Development</span>
              <Typing.Reset count={1} delay={1000} />
              <span>Web Development</span>
              <Typing.Backspace count={15} delay={1000} />
              <span>Let's Work Together</span>
            </Typing>
            {cursor}
          </div>
          <div className="lottie-down-arrow">
            {arrow}
          </div>
        </MainText>
      </HomeContainer>

      <Row>
        <Col>
          <PortfolioContainer>
            <div>
              <Portfolio />
            </div>
          </PortfolioContainer>
        </Col>
      </Row>

    </Container>
  );
}

export default Home;
