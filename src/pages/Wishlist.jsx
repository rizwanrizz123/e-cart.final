import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);
  const dispatch = useDispatch()

  const handlewishlist = (item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
  }

  return (
    <div style={{marginTop:'150px',marginBottom:'50px'}}>
      <Row className='ms-5 me-3'>
        {
          wishlistArray?.length>0?
          wishlistArray?.map((item)=>(<Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
          <Card style={{ width: '18rem',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
          <Card.Img variant="top" src={item.image} style={{height:'200px'}}/>
          <Card.Body>
          <Card.Title>{item.title.slice(0,20)}...</Card.Title>
          <Card.Text>
          <p>{item.description.slice(0,50)}...</p>
          <p className='fw-bolder'>Price : $ {item.price}</p>
          </Card.Text>
          <div className='d-flex align-items-center justify-content-between'>
          <Button onClick={()=>dispatch(removeFromWishlist(item.id))} variant="outline-danger"><i class="fa-solid fa-trash" style={{color:'red'}}></i></Button>
          <Button onClick={()=>handlewishlist(item)} variant="outline-danger"><i class="fa-solid fa-cart-shopping" style={{color:'green'}}></i></Button>
          </div>
          </Card.Body>
          </Card>
          </Col>))
          :<div>
            <p>Nothing to Display</p>
          </div> 
      }
      </Row>
    </div>
  )
}

export default Wishlist