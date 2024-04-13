import React from 'react';
import NavBar from "../components/Navbar";
import {useLocation, useNavigate} from 'react-router-dom';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

function ResultPage (){
    const location = useLocation();
    const navigate = useNavigate()
    const getSubtitle = (score) => {
        if (score > 7) {
          return "Great you passed the test";
        } else if (score >= 4 && score <= 7) {
          return "Good score but you need more practice";
        } else {
          return "Better luck next time, practice more";
        }
      };

    function goToHome(){
        navigate('/')
    }

    function goToQuiz(){
        navigate('/quiz')
    }

    return(
        <>
        <NavBar/>
        <Container>
            <Row className="centered-container">
                <Col>
                <Card>
                    <Card.Text className='m-0 p-1 d-flex justify-content-center'>Your score</Card.Text>
                    <Card.Title className='m-2 p-2 d-flex justify-content-center'><p className="fs-1 fw-bold">{location.state}</p></Card.Title>
                    <Card.Subtitle className='d-flex justify-content-center'>{getSubtitle(location.state)}</Card.Subtitle>
                    <Button  variant='warning' className='m-1'onClick={goToHome}>Back to start page</Button>
                    <Button  variant='danger' className='m-1' onClick={goToQuiz}>Retake the Test</Button>
                </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default ResultPage;