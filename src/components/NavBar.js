import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navIcon1 from '../assets/img/nav-icon1.svg';

import navIcon3 from '../assets/img/github.svg';
// import { HashLink } from 'react-router-hash-link';


function NavBar() {
    const [activeLink, setActiveLink]=useState('home');
    const [scrolled, setScrolled]=useState(false)

    useEffect(()=>{
        const onScroll=()=>{
            if (window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return ()=> window.removeEventListener("scroll", onScroll);
    }, [])


    const OnUpdateActiveLink =(value)=>{
        setActiveLink(value)
    }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
        <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home'? 'active navbar-link': 'navbar-link'} 
            onClick ={()=>OnUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills'? 'active navbar-link': 'navbar-link'} onClick ={()=>OnUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects'? 'active navbar-link': 'navbar-link'} onClick ={()=>OnUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#certificates" className={activeLink === 'certificates'? 'active navbar-link': 'navbar-link'} onClick ={()=>OnUpdateActiveLink('certificates')}>Certificates</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='https://www.linkedin.com/in/sercancosgunkara/'><img src={navIcon1} alt="" /></a>
                <a href='https://github.com/SercanKr9'><img src={navIcon3} alt="" /></a>
            </div>
            <Nav.Link href='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </Nav.Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;