import { useState, useEffect, React} from 'react';
import axios from 'axios';
import './css/ManageProductStyle.css';
import AdminNav from './AdminNav';
function ManageProducts(){
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
            <h1>Product Management</h1>
          </div>
          <div className='prods-details'>
          <h2>Total Number of products: {noItem}</h2>
          <a href="/addproduct" className='prods-button-area'><button className='a2C prods-button'>Add Product</button></a>
          </div>
        </div>
        <div>
          <div className='search-div'>
          <input type="text" className='prods-search' id='prods-search' placeholder='Search Products'/>
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
              
              <button className='close-cart-popup' onClick={() => setTrigger(false)}><i class="fa fa-trash" style={{fontSize:'20px'}}></i> Remove Product</button>
             </div>
             
         ))) : ''
        }
    </div>
      </div>
        </>
    )
}

export default ManageProducts;