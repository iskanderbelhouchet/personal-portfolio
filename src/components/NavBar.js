import { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../assets/img/logo.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import navIcon4 from '../assets/img/behance.png'

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  return (
    <Navbar expand='md' className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href='/'>
          <img src={logo} alt='Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'>
          <span className='navbar-toggler-icon' />
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='#home' className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href='#skills' className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href='#technologies' className={activeLink === 'technologies' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('technologies')}>Technologies</Nav.Link>
            <Nav.Link href='#projects' className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='https://www.linkedin.com/in/iskander-belhouchet-8370b9191/'><img src={navIcon1} alt='' /></a>
              <a href='https://github.com/iskanderbelhouchet'><img src={navIcon2} alt='' /></a>
              <a href='https://www.instagram.com/iskanderdev/'><img src={navIcon3} alt='' /></a>
              <a href='https://www.behance.net/iskandebelhouchet'><img src={navIcon4} alt='Icon' /></a>
            </div>
            <button><a className='vvd' href='https://www.freelancer.com/u/iskanderskon'><span className='text-white'>Let???s Connect</span></a></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
