import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Button, Image } from 'react-bootstrap';
import './McqCard.css'; // For centering the card on all sizes of screen

function McqCard(props) {
  const host = 'https://ajinkya213.pythonanywhere.com/';
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

  const getOption = (optionIndex) => {
    setSelectedOptionIndex(optionIndex);
    props.onAnswered(); // Notify parent component that a question is answered

    const answerIndex = props.mcq.answer;
    
    if (answerIndex === optionIndex + 1) {
      props.onMarksUpdate(prevMarks => prevMarks + 1); // Update marks in parent component
    }

    // Load next question after 4 seconds
    setTimeout(() => {
      setSelectedOptionIndex(null); // Reset selected option
      props.onNext(); // Move to the next question
    }, 3000);
  };

  useEffect(() => {
    setSelectedOptionIndex(null); // Reset selected option on question change
  }, [props.mcq]);

  return (
    <Container>
      <Row className="justify-content centered-container">
        <Col xs={12} md={10} lg={10}>
          <Card>
            <Card.Body className="m-1">
              <Row>
                <Col>Q {props.index+1}/10</Col>
                <Col className='text-end'>Time : {props.timer} sec</Col>
              </Row>
              {props.mcq.image ? (
                <Row className='justify-content-center pt-2 pb-3'>
                  <Col md={8} lg={8} sm={6} xs={12}>
                    <Card className='h-100'>
                      <Card.Body>
                        Q. {props.mcq.question}
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} lg={2} sm={6} xs={12}>
                    <Card>
                      <Card.Body className='d-flex justify-content-center'>
                        <Image src={host + props.mcq.image} className="thumbnail" />
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              ) : (
                <Row className='justify-content-center pt-2 pb-3'>
                  <Col md={8} lg={8} sm={12} xs={12}>
                    <Card className='h-100'>
                      <Card.Body>
                        Q. {props.mcq.question}
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              )}
              <Row className="justify-content-center">
                {props.mcq.options.map((option, optionIndex) => (
                  <Col className="m-1" md={8} lg={8} sm={12} key={optionIndex}>
                    <Button
                      className="w-100"
                      variant={selectedOptionIndex === optionIndex ? (props.mcq.answer === optionIndex + 1 ? 'success' : 'danger') : 'outline-dark'}
                      onClick={() => getOption(optionIndex)}
                      disabled={selectedOptionIndex !== null} // Disable buttons after an option is selected
                    >
                      {option}
                    </Button>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default McqCard;
