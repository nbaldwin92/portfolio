import React from 'react'

import { Container, Row, Col } from 'reactstrap';


import {Card, CardFront, CardDescription, CardBack, CardNumber, CardTitle} from './Card'

// Create layout component
class Portfolio extends React.Component {
    flipCard(event) {
      event.currentTarget.classList.toggle('flipped')
    }
  
    render() {
      return (
        <Container>

            <Row>
                <Col md="6">
                <Card onClick={this.flipCard.bind(this)}>
                  <CardFront>
                    <CardNumber>1.</CardNumber>
  
                    <CardTitle>Card</CardTitle>
                  </CardFront>
  
                  <CardBack>
                    <CardDescription>Rand's stated goal for writing the novel was "to show how desperately the world needs prime movers and how viciously it treats them" and to portray "what happens to the world without them".</CardDescription>
                  </CardBack>
                </Card>
  
                </Col>

                <Col>

                <Card onClick={this.flipCard.bind(this)}>
                  <CardFront>
                    <CardNumber>2.</CardNumber>
  
                    <CardTitle>Card</CardTitle>
                  </CardFront>
  
                  <CardBack>
                    <CardDescription>The core idea for the book came to her after a 1943 telephone conversation with a friend, who asserted that Rand owed it to her readers to write fiction about her philosophy.</CardDescription>
                  </CardBack>
                </Card>

                </Col>

                </Row>

                <Row>

                    <Col>
  
                <Card onClick={this.flipCard.bind(this)}>
                  <CardFront>
                    <CardNumber>3.</CardNumber>
  
                    <CardTitle>Card</CardTitle>
                  </CardFront>
  
                  <CardBack>
                    <CardDescription>To produce Atlas Shrugged, Rand conducted research on the American railroad industry. Her previous work on a proposed (but never realized) screenplay.</CardDescription>
                  </CardBack>
                </Card>

                </Col>

                <Col>
  
                <Card onClick={this.flipCard.bind(this)}>
                  <CardFront>
                    <CardNumber>4.</CardNumber>
  
                    <CardTitle>Card</CardTitle>
                  </CardFront>
  
                  <CardBack>
                    <CardDescription>Atlas Shrugged is set in a dystopian United States at an unspecified time, in which the country has a "National Legislature" instead of Congress and a "Head of State" instead of a President.</CardDescription>
                  </CardBack>
                </Card>

                </Col>

                </Row>

        </Container>
      )
    }
  }

export default Portfolio