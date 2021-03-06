import React from "react";
import { useSelector} from 'react-redux';
import "../css/cart.css";
import cart from "../img/chart.png";
import chasier from '../img/gallery.png'

const EmptyCart = () => {
  const {auth} = useSelector((state) => state)


  return (
    <>
      {auth.user.id_level === 2 ? (
        <div className='empty-cart'>
          <img alt='cart' className='img-fluid' src={cart} />
          <h3>Your cart is empty</h3>
          <p className='text-muted'>Please add some items from the menu</p>
        </div>
      ) : (
        <div className='empty-cart' >
          <img src={chasier} alt='' style={{
              width: '80%',
              height: '40vh'
          }} />
          <h3 style={{fontWeight: 'bold'}}>All the food you need is here </h3>
        </div>
      )}
    </>
  );
};
export default EmptyCart;
