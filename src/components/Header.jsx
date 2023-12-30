import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';


function Header() {
  //to access state useSelector hook is used
  const wishlist = useSelector((state)=>state.wishlistReducer)//here the state represent the store
  /* console.log(wishlist); */
  const cart = useSelector((state)=>state.cartReducer)
  /* console.log(cart); */
  return (
    <div>
         <Navbar expand="lg" className="bg-secondary position-fixed top-0 w-100" style={{zIndex:'1'}}>
        <Container>
        <Navbar.Brand ><Link style={{textDecoration:'none',color:'white'}} to={'/'}><i class="fa-solid fa-wand-magic-sparkles fa-beat"></i> <b>Take A Scroll</b></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='btn border rounded me-5 mt-3'><Link style={{textDecoration:'none',color:'white'}} to={'/wishlist'}><i class="fa-solid fa-heart" style={{color:'red'}}></i> Wishlist  <Badge bg="secondary">{wishlist.length}</Badge> </Link></Nav.Link>
            <Nav.Link className='btn border rounded me-5 mt-3'><Link style={{textDecoration:'none',color:'white'}} to={'/cart'}><i class="fa-solid fa-cart-shopping" style={{color:'green'}}></i> Cart  <Badge bg="secondary">{cart.length}</Badge> </Link></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
         </Navbar>
    </div>
  )
}

export default Header