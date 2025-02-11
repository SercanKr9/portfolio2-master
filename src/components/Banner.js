import {useState, useEffect} from 'react';
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from '../assets/img/header-img.svg'
import 'animate.css'
import TrackVisibility from 'react-on-screen';
import Nav from 'react-bootstrap/Nav';

export const Banner =()=>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    // const [index, setIndex] = useState(1);
    const [, setIndex] = useState(1);
    const toRotate = [ "Salesforce Developer", "Salesforce Administrator"];
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
    //   return () => { clearInterval(ticker) };
    // }, [text])
    return () => { clearInterval(ticker) };
  })
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }
    return(
        <section className="banner" id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                      <TrackVisibility>
                      {({ isVisible }) =>
                      <div className={isVisible ? "animate__animated animate__rollIn" : ""}>
                        <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi, Ich bin Sercan`} 
                    <h2 className="wrap">{text}</h2></h1>
                    <p>Salesforce Developer uzmaniyim, is ariyorum...

                    </p>
                    <Nav.Link href='#connect'>
                <button >Let’s Connect <ArrowRightCircle size={25}/></button>
              </Nav.Link>
                    {/* <button onClick={()=> console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button> */}
                    </div>}
                      </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                         
                    </Col>
                </Row>
            </Container>

        </section>
    )
}