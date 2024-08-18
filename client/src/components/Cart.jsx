import { useState, useEffect, React} from 'react';
import axios from 'axios';
import './css/CartStyle.css';
import NavBar from './navbar';
function Cart(){
  let [result, setResult] = useState();
  let [trigger, setTrigger] = useState(true);
  let [noItem, setNoItem] = useState(0);//20
  let [subTotal, setSubtotal] = useState(0);//3240.92
  const [counter, setCounter] = useState(0);


  const loadData = async() => {
    const response = await axios.get('https://fakestoreapi.com/products');  /*http://localhost:2000/products*/
    setResult(response.data);
    setNoItem(response.data.length);
    console.log(counter)
    setCounter(counter+1)
     //await new Promise(r => setTimeout(r, 2000));
     let tot = 0;
     for (let i = 0; i < noItem; i++) {
      tot = tot + result[i].price;
    }
    setSubtotal(tot);
  }

  useEffect(() =>{
    loadData();
    },[counter]);

    return(
      <>
      <NavBar /> 
        <div className='BodyHome'>
            <div>
  <div style={{ height: '200px' }} />
  <div className='cart-body'>
    <br />
    <h2
        style={{
          margin:'20px',
          fontFamily: "Arial",
          fontSize: '42px',
          paddingTop: '5px',
          paddingLeft: '5px',
          color:'black',
          borderRadius:'30px'
        }}
      >
       <i class="fa fa-shopping-cart"></i> My Cart
      </h2>
  <div className='cart-details'>
        <div>
        <h2>Total of {noItem} items in cart!</h2>  
        <h2>Subtotal: ${subTotal.toFixed(2)}</h2>  
        </div>
        <div>
          <button className='buy'>$Proceed to Buy</button>
        </div>
  </div>
    <div
      style={{
        backgroundColor:'none',
        margin:'0px 40px',
        height:'auto',
        display:'flex',
        padding:'40px',
        justifyContent: 'space-evenly',
        alignItems:'space-between',
        flexWrap: 'wrap',
        paddingRight: '20px',
        paddingBottom: '20px',
        paddingLeft: '20px',
        paddingTop: '40px'
      }}>
        {
          (trigger) ? (result?.map((product) => (
            
            <div className='cart-prods'>
              
              <div style={{width:'30%'}}>
              <a href=''>
              <img src={product.image} alt="product image" style={{
                width:'150px',
                height:'150px',
                borderRadius: '12px'}}/>
                </ a>
                </div>
                <div style={{width:'60%'}}>
                <a href=''>
              <h1>{product.title}</h1>
              <h2>${product.price}</h2>
              </a>
              </div>
              
              <button className='close-cart-popup' onClick={() => setTrigger(false)}><i class="fa fa-trash" style={{fontSize:'20px'}}></i> Remove Item</button>
             </div>
             
         ))) : ''
        }
    </div>
  </div>
</div>

        </div>
        </>
    )
}

export default Cart;