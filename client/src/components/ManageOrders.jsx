import { useState, useEffect, React} from 'react';
import axios from 'axios';
import './css/ManageOrderStyle.css';
import AdminNav from './AdminNav';
function ManageOrders(){
  let [result, setResult] = useState();
  let [trigger, setTrigger] = useState(true);
  const [counter, setCounter] = useState(0);
  let [noItem, setNoItem] = useState(0);
  const loadData = async() => {
    const response = await axios.get('https://fakestoreapi.com/products');  /*http://localhost:2000/products*/
    setResult(response.data);
    setNoItem(response.data.length);
    console.log(counter)
    setCounter(counter+1)
     // await new Promise(r => setTimeout(r, 2000));

  }

  useEffect(() =>{
    loadData();
    },[counter]);

    return(
      <>
      <AdminNav />
      <div className='ProdBgMain'>
        <div className='prods-main-div'>
          <div className='prods-heading'>
            <h1>Order Management</h1>
          </div>
          <div className='prods-details'>
          <h2>Total Number of Orders Pending: 0</h2>
          <h2>Total Number of Orders Completed: {noItem}</h2>
          </div>
        </div>
        <div>
          <div className='search-div'>
          <input type="text" className='prods-search' id='prods-search' placeholder='Search Order ID'/>
          <button className='prods-search-submit'><i class="fa fa-search"></i></button>
          </div>
        </div>
        <div
      style={{
        backgroundColor:'none',
        height:'auto',
        display:'flex',
        padding:'40px',
        justifyContent: 'space-evenly',
        alignItems:'space-between',
        flexWrap: 'wrap',
        paddingRight: '20px',
        paddingBottom: '20px',
        paddingLeft: '20px',
        paddingTop: '40px',
      }}>
        {
          (trigger) ? (result?.map((product) => (
            
            <div className='cart-prods'>
              
              <div style={{width:'10%'}}>
              <a href=''>
              {/* <img src='' alt="product image" style={{
                width:'200px',
                height:'200px',
                borderRadius: '12px'}}/> */}
                <i class="fa fa-shopping-cart" style={{fontSize:'102px'}}></i>
                </ a>
                </div>
                <div style={{width:'80%'}}>
                <a href=''>
              <h1>Order ID: 323523521</h1>
              <h1>Order by: USER NAME</h1>
              <h1>Item: {product.title}</h1>
              <h2>Subtotal: ${product.price}</h2>
              </a>
              </div>
              
              <button className='close-cart-popup' onClick={() => setTrigger(false)}><i class="fa fa-trash" style={{fontSize:'20px'}}></i> Remove Order</button>
              <button className='open-cart-popup' onClick={() => setTrigger(false)}><i class="fa fa-eye" style={{fontSize:'20px'}}></i> View Order</button>
             </div>
             
         ))) : ''
        }
    </div>
      </div>
        </>
    )
}

export default ManageOrders;