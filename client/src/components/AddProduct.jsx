import {useEffect, useState, React} from 'react';
import axios from 'axios';
import './css/AddProductStyle.css'
import AdminNav from './AdminNav';
function AddProduct(){

    let [id, setId] = useState(69);
    let [title, setTitle] = useState(0);
    let [price, setPrice] = useState(0);
    let [image, setImgurl] = useState('');
    let [description, setDesc] = useState('');
    let [category, setCat ] = useState('');
    let [rate, setRate] = useState(0);
    let [count, setRespo] = useState(0);

  async function addProduct()  {
    const response = await axios.post('http://localhost:2000/addproduct', {id, title, price, description, category, image,  "rating":{rate, count}});
    console.log(response.data)
}


 return(
  <>
  <AdminNav />
  <div className='ProdBgMain'>
      <div
      style={{
        backgroundColor:'none',
        margin:'0px 40px',
        height:'auto',
        display:'flex',
        padding:'40px',
        flexDirection: 'column',
        alignItems:'flex-start',
        padding: '20px',
        paddingTop: '40px'
      }}>
        <h1 style={{fontSize:'30px'}}>Add Product</h1>
        <h1 className='Wtitles'>Enter product title:</h1>
        <input type="text" placeholder='Product Title' onChange={(e) => setTitle(e.target.value)} required/>
        <h1 className='Wtitles'>Enter product price:</h1>
        <input type="number" placeholder='Product Price' onChange={(e) => setPrice(e.target.value)}  required/>
        <h1 className='Wtitles'>Enter product description:</h1>
        <textarea name="ProductDescription" cols="100" rows="5" style={{border:'none', boxShadow:'5px 5px 20px black', borderRadius:'8px', padding:'10px'}} placeholder='Product Description'onChange={(e) => setDesc(e.target.value)}  required></textarea> 
        <h1 className='Wtitles'>Enter product category:</h1>
        <input type="text" list='catergory' placeholder='Product category' onChange={(e) => setCat(e.target.value)} required />
        <h1 className='Wtitles'>Enter product image url:</h1>
        <input type="text" placeholder='Product Image URL'  onChange={(e) => setImgurl(e.target.value)} required />
        <h1 className='Wtitles'>Enter product rating and responeses:</h1>
        <input type="number" min='0.0' max='5.0' placeholder='Product Rating'  onChange={(e) => setRate(e.target.value)} required/>
        <input type="text" placeholder='Product Responses'  onChange={(e) => setRespo(e.target.value)} required/>
        <datalist id="catergory">
        <option value="Edge" />
        <option value="Firefox" />
        <option value="Chrome" />
        <option value="Opera" />
        <option value="Safari" />
        </datalist>
        <input type="submit"  value='submit' className='submit' onClick={addProduct}/>
        <div style={{height:'150px'}}></div>
      </div>
      </div>

        </>
    )
}

export default AddProduct;