import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [unit, setUnit] = useState('Metric');
  const [bmiValue, setBmiValue] = useState('-');
  const [category, setCategory] = useState('-');
  const [weightUnit, setWeightUnit] = useState('kg');
  const [heightUnit, setHeightUnit] = useState('cm');

  const handleChange = (e) => {
    const selectedUnit = e.target.value;
    setUnit(selectedUnit);
    if (selectedUnit == 'Metric') {
      setWeightUnit('kg');
      setHeightUnit('cm');
    } else {
      setWeightUnit('lbs');
      setHeightUnit('in');
    }
  };

  const calculateBmi = () => {
    if (weight > 0 && height > 0) {
      let bmi;
      if (unit == 'Metric') {
        bmi = (weight / ((height * height) / (100 * 100))).toFixed(2);
      } else {
        bmi = ((703 * weight) / (height * height)).toFixed(2);
      }
      setBmiValue(bmi);

      let message = '';
      if (bmi < 18.5) {
        message = 'Underweight';
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        message = 'Normal weight';
      } else if (bmi >= 25 && bmi <= 29.9) {
        message = 'Overweight';
      } else {
        message = 'Obesity';
      }

      setCategory(message);
      setWeight('');
      setHeight('');
    } else {
      setBmiValue('-');
      setCategory('-');
    }
  };

  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          value={weight}
          placeholder="Weight"
          onChange={(e) => setWeight(e.target.value)}
          aria-describedby="weight"
        />
        <InputGroup.Text id="weight">({weightUnit})</InputGroup.Text>
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          value={height}
          placeholder="Height"
          onChange={(e) => setHeight(e.target.value)}
          aria-describedby="height"
        />
        <InputGroup.Text id="height">({heightUnit})</InputGroup.Text>
      </InputGroup>
      <Form.Select value={unit} onChange={handleChange}>
        <option value="Metric">Metric</option>
        <option value="Imperial">Imperial</option>
      </Form.Select>
      <br />
      <Button variant="primary" onClick={calculateBmi}>
        Calculate
      </Button>
      <br />
      <br />
      <div>
        <h5>Bmi: {bmiValue}</h5>
        <h5>Category: {category}</h5>
      </div>
    </>
  );
};

export default BmiCalculator;
