import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const cartArray = useSelector((state)=>state.cartReducer)
  /* console.log(cartArray); */
  const dispatch = useDispatch()
  const [total, setTotal] = useState(0)
  const navigate = useNavigate()

  //function to find the sum of the given array
  const getTotal = ()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
  }
  console.log(total);

  useEffect(()=>{
    getTotal()
  },[cartArray])

  const handlecart = ()=>{
    alert('Thankyou..... Your order placed succesfully')
    dispatch(emptyCart())
    navigate('/')
  }

  return (
    <div style={{marginTop:'100px'}}>
      {cartArray?.length>0?
        <div className='row w-100'>
        
          
          <div className='col-lg-6 m-5'>
          <table className='table shadow border'>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartArray?.map((item,index)=>(<tr>
                <td>{index+1}</td>
                <td>{item.title}</td>
                <td><img style={{width:'100px', height:'100px'}} src={item.image} alt="no image" /></td>
                <td>$ {item.price}</td>
                <td> <Button onClick={()=>dispatch(removeFromCart(item.id))} variant="outline-danger"><i class="fa-solid fa-trash" style={{color:'red'}}></i></Button></td>
              </tr>))
                }
            </tbody>
          </table>
        </div>
        <div className='col-lg-4 d-flex justify-content-center align-items-center flex-column'>
          <div className='border shadow p-5'>
            <h3 className='text-success'>Cart Summary</h3>
            <h4>Total number of products : <span className='fw-bolder fs-4 text-warning'>{cartArray.length}</span></h4>
            <h4>Total Price :  <span className='fw-bolder fs-4 text-warning'>$ {total}</span></h4>
            <button onClick={handlecart} className='btn btn-success rounded w-100 mt-3'>CheckOut</button>
          </div>

        </div>
        
        </div>: <p>Nothing to Display</p>
        }
    </div>
  )
}

export default Cart