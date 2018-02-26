import React, { Component } from 'react';
import { Container, Row, Col, Card, CardTitle } from 'react-materialize';

import './About.css';
import aboutImg from './About.jpg';

class About extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col s={12}>
            <Card className="blue lighten-1" header={<CardTitle image={aboutImg}>Forum Joy</CardTitle>}>
              <span>Forum Joy will forever change the landscape of Forum Boilerplate Generation.</span>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;