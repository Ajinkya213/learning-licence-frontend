import React from 'react';
import {useNavigate} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const values = {
    title:"Welcome to learning licence test"
}

function Hero(props) {
const navigate = useNavigate()

const navigateQuiz =() =>{
    navigate('/quiz')
}
  return (
<Container>
    <Card>
      <Card.Header as="h1">{values.title}</Card.Header>
      <Card.Body>
      <div className="d-grid">
        <Button size="lg" variant={props.color? 'success': 'secondary'} disabled={props.isActive}onClick={navigateQuiz}>{props.errori}</Button>
     </div>
        <div className='mt-4 p-1'>
        <Card.Title>FAQ (Frequently Asked Questions)</Card.Title>
        <Card.Subtitle>What is this?</Card.Subtitle>
        <Card.Text>This is a simple test to prepare for learning licence examination.</Card.Text>
        <Card.Subtitle>Why this is created?</Card.Subtitle>
        <Card.Text>It is an ad-free and no distractions website which gives users to practice for learning licence exam.</Card.Text>
        <Card.Subtitle>What type of questions are in the test?</Card.Subtitle>
        <Card.Text>It has all the 438 MCQ (Multiple Choice Questions) which are asked in learning licence examination. Some questions are images based. In a question three options will presenetd out of which only one option is correct. Some questions have images.</Card.Text>
        <Card.Subtitle>What is the source of it?</Card.Subtitle>
        <Card.Text>Data is extracted from the publicly available <a target="_blank" rel="noopener noreferrer" href='https://parivahan.gov.in/parivahan/sites/default/files/DownloadForm/STALL_QB_ENGLISH_NEW.pdf' className=''>PDF</a> learning licence question bank provided by <a target="_blank" rel="noopener noreferrer" href="https://parivahan.gov.in/parivahan" className="link-primary">parivahan.gov</a></Card.Text>
        <Card.Subtitle>Who owns the data?</Card.Subtitle>
        <Card.Text>All the data which is extracted from the PDF belongs to Road and Transport Ministry, Goverment of India and National Informatics Centre (<a target="_blank" rel="noopener noreferrer" href='https://www.nic.in/' className='pro'>NIC</a>)</Card.Text> 
        <Card.Subtitle>Why the button is greyed out and it says 'Server Error X-{'('}'?</Card.Subtitle>
        <Card.Text>This can mean either there is a internal server error or the app cannot connect with the server</Card.Text> 
        </div>
      </Card.Body>
    </Card>
</Container>
  );
}

export default Hero