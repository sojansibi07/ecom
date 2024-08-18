import React from 'react';
import './css/ProductPopupStyle.css';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { Store } from 'react-notifications-component';

function ProductPop(props) {
  const addProductnotification = () => {
    Store.addNotification({
      title: "Added to cart",
      message: "Item Added to Cart Succesfully!",
      type: "success",
      insert: "top",
      container: "top-left",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 3000,
        onScreen: true
      }
    });
  }

  return (props.trigger) ? (
    <>
    <ReactNotifications />
    <div className='popup'>
        <div className='popup-inner'>
      <button className='close-popup' onClick={() => props.setTrigger(false)}><i class="fa fa-close" style={{fontSize:'20px'}}></i></button>
      <div className='details-div'>
        <div className='img-section'>
        <img src={props.img} alt="product image" style={{
                width:'400px',
                height:'400px'}}/>
        </div>
        <div className='info-section'>
        <h1 style={{color:'black'}}> {props.title} <br /> <h2 style={{color:'black'}}> ${props.price}</h2> </h1>
        <h3 style={{color:'black'}}> {props.descp}</h3>
        <div className='bottom-div'>
        <h4 style={{color:'black'}}> <i class="fa fa-star" style={{color:'yellow'}}></i>:{props.rating}  From:{props.count} Responses <br /> Catergory: {props.cat}</h4>
        <button className='a2C' onClick={addProductnotification} ><i class="fa fa-shopping-cart"></i> Add to Cart</button>
        </div>
        </div>
      </div>
      </div>
    </div>
    </>
  ) : "";
}

export default ProductPop;
