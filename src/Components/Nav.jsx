import React from 'react'
import { Navbar, Container, Button } from 'react-bootstrap'
export default function Nav() {
  return (
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home" style={{maxWidth:'10vw'}}>
    <img
        src="https://lsalead.com/wp-content/uploads/2022/04/Untitled_design__88_-removebg-preview.png"
        width="130px"
        height="50px"
        className="d-inline-block align-top"
        alt="lsaLead logo"
      />
    </Navbar.Brand>
 
    {/* <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'> */}
    <div className='justify-contend-end'>
       <Button variant="outline-success m-1">Signin</Button>{' '}
       <Button variant="outline-info m-1">Signup</Button>{' '}
       </div>
    {/* </Navbar.Collapse> */}
  </Container>
</Navbar>
  )
}
