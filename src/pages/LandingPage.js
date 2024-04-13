import React,{useState, useEffect} from 'react';
import NavBar from "../components/Navbar";
import Hero from "../components/Hero";

function LandingPage (){

    
    const [errorInfo, setErrorInfo] = useState('');
    const [buttonActive, setButtonActive] = useState(true);
    const [variantColor, setVariantColor] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
            await fetch('https://ajinkya213.pythonanywhere.com/');
            setErrorInfo('Start the test')
            setButtonActive(true)    
            setVariantColor(true)
        } catch (error) {
          setButtonActive(false);
          setErrorInfo('Server Error X-(')
          setVariantColor(false)
        }
      };
  
      fetchData();
    }, []);
  
    return(
        <>
        <NavBar/>
        <Hero errori={errorInfo} isActive={!buttonActive} color={variantColor}/>
        </>
    )
}

export default LandingPage;