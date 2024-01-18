import React from 'react';
import './style.css';
import BmiCalculator from './components/BmiCalculator';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>BMI Calculator</h3>
          <BmiCalculator />
        </Col>
      </Row>
    </Container>
  );
}
