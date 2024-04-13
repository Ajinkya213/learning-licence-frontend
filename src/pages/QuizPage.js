import React, { useEffect, useState } from 'react';
import NavBar from '../components/Navbar';
import McqCard from '../components/McqCard';
import { useNavigate } from 'react-router-dom';

function QuizPage() {

  const navigate = useNavigate()

  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [marks, setMarks] = useState(0);
  const [questionTimer, setQuestionTimer] = useState(10); // Set initial question timer to 10 seconds
  const [delayedNextQuestion, setDelayedNextQuestion] = useState(false);
  const [pauseTimer, setPauseTimer] = useState(false); // State to pause the question timer

  useEffect(() => {

    

    const fetchData = async () => {
      try {
        const response = await fetch('https://ajinkya213.pythonanywhere.com/getMCQ');
        const data = await response.json();
        setQuizData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Start the question timer countdown
    const timerId = setInterval(() => {
      if (!pauseTimer) {
        setQuestionTimer(prevTimer => prevTimer - 1);
      }
    }, 1000);

    // Reset question timer and move to next question when timer reaches 0
    if (questionTimer === 0 && !delayedNextQuestion) {
      clearInterval(timerId);
      handleNextQuestion();
    }

    // Cleanup function
    return () => clearInterval(timerId);
  }, [questionTimer, pauseTimer, delayedNextQuestion]);

  useEffect(() => {
    // Delay moving to the next question after selecting an option
    if (delayedNextQuestion) {
      const delayId = setTimeout(() => {
        setDelayedNextQuestion(false);
        setPauseTimer(false); // Unpause the question timer after the delay
        setQuestionTimer(10); // Reset question timer to 10 seconds for the next question
      }, 3000); // 3 seconds delay before moving to the next question
      return () => clearTimeout(delayId);
    }
  }, [delayedNextQuestion]);

  const handleAnsweredQuestion = () => {
    setAnsweredQuestions(prevCount => prevCount + 1);
    setDelayedNextQuestion(true); // Set flag to delay moving to the next question
    setPauseTimer(true); // Pause the question timer when an option is selected
  };

  const handleMarksUpdate = (newMarks) => {
    console.log(`marks: ${newMarks}`)
    setMarks(newMarks);
  };

  const handleNextQuestion = () => {
    console.log(currentQuestionIndex)
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setQuestionTimer(10);  // Reset question timer to 10 seconds for the next question
    } else {
      // Navigate to result page when all questions are answered
      console.log('Should redirect ')
      navigate('/result',{state:marks})
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar />
      <McqCard
        mcq={quizData[currentQuestionIndex]}
        timer={questionTimer}
        index={currentQuestionIndex}
        onAnswered={handleAnsweredQuestion}
        onMarksUpdate={handleMarksUpdate}
        onNext={handleNextQuestion}
      />
    </>
  );
}

export default QuizPage;
