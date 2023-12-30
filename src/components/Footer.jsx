import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <div style={{width:'100%', height:'300px'}} className='d-flex align-items-center justify-content-center flex-column bg-secondary text-light '>
        <div className='footer d-flex align-items-center justify-content-center '>
            <div className='website mt-3' style={{width:'500px'}}>
                <h4><i class="fa-solid fa-cart-shopping fa-beat"></i>
          {' '}
            Take A Scroll </h4>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem vitae eveniet fugiat quia accusamus id est quam beatae officia explicabo. Sequi qui praesentium, ipsam illo iure voluptate ab impedit amet?</h6>
            <h6>ipsam illo iure voluptate ab impedit amet?</h6>
            </div>
            <div className='link d-flex flex-column ms-5 mb-3'>
                <h4>Links</h4>
                <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Home Page</Link>
                <Link to={'home'} style={{textDecoration:'none', color:'white'}}>Cart</Link>
                <Link to={'watch-history'} style={{textDecoration:'none', color:'white'}}>Wishlist</Link>
            </div>
            <div className='guides d-flex flex-column ms-5 mb-3'>
                <h4>Guides</h4>
                <Link to={'/'} style={{textDecoration:'none', color:'white'}}>React</Link>
                <Link to={'home'} style={{textDecoration:'none', color:'white'}}>React Bootstrap</Link>
                <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white'}}>Bootswatch</Link>
            </div>
            <div className='contact ms-5'>
                <h4>Contact Us</h4>
                <div className='d-flex '>
                    <input type="text" className='form-control' placeholder='Enter Your Email Id' />
                    <button className='btn btn-warning text-white ms-3'>Subscribe</button>
                </div>
                <div className='d-flex justify-content-evenly mt-3'>
                    <Link to={'/'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>
                    <Link to={'home'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
                    <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-twitter fa-2x"></i></Link>
                    <Link to={'/'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
                </div>
            </div>
        </div>
        <p className='mt-3'>Copyright © 2023 Take A Scroll. Built with React</p>
    </div>
    </div>
  )
}

export default Footer