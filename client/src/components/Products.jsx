import { useState, useEffect, React} from 'react';
import axios from 'axios';
import './css/ProductsStyle.css';
import NavBar from './navbar';
import ProductPop from './ProductPopup';

function Products(){
  
  const [productPopup, setProductPopup] = useState(false);
  let [title, setTitle] = useState(0);
  let [price, setPrice] = useState(0);
  let [image, setImgurl] = useState('');
  let [description, setDesc] = useState('');
  let [category, setCat ] = useState('');
  let [rate, setRate] = useState(0); 
  let [count, setRespo] = useState(0);
  let [result, setResult] = useState();



  const popProduct = (img, ttle, prce, decri, rte, cnt, cat) => {
    setProductPopup(true)
    setTitle(ttle);
    setPrice(prce);
    setImgurl(img);
    setDesc(decri);
    setRate(rte);
    setRespo(cnt);
    setCat(cat)
    
  }

  const loadData = async() => {
    const response = await axios.get('https://fakestoreapi.com/products');  /*http://localhost:2000/products*/
    setResult(response.data)
    console.log(result)
    
  }

  useEffect(() =>{
    loadData();
    },[]);

    return(
      <>
      <NavBar /> 
        <div className='BodyHome'>
            <div>
  <div style={{ height: '200px' }} />
  <div style={{ height: "100%", width: "100%" }}>
    <h2
        style={{
          margin: '20px',
          fontFamily: "monospace",
          fontSize: '52px',
          paddingTop: '5px',
          paddingLeft: '5px',
          color:'black',
          backgroundColor:'rgba(255, 255, 255, 0.119)',
          backdropFilter:'blur(10px)',
          borderRadius:'30px'
        }}
      >
        Products & Services
      </h2>
       <div className='search-div'>
          <input type="text" className='prods-search' id='prods-search' placeholder='Search Products' />
          <button className='prods-search-submit'><i class="fa fa-search"></i></button>
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      
        {
          result?.map((product) => (
            <a onClick={() => popProduct(product.image, product.title, product.price, product.description, product.rating.rate, product.rating.count, product.category)}>
            <div className='prods'>
              <img src={product.image} alt="product image" style={{
                width:'200px',
                height:'200px',
                borderRadius: '12px'}}/>
              <h1>{product.title}</h1>
              <h2>${product.price}</h2>
              <h3><i class="fa fa-star"></i> {product.rating.rate} stars</h3>
              <h3>{product.rating.count} responeses</h3>
             </div>
             </a>
         ))
        }
      <ProductPop trigger={productPopup} setTrigger={setProductPopup} img={image} title={title} price={price} descp={description} rating={rate} count={count} cat={category}/>
    </div>
  </div>
</div>

        </div>
        </>
    )
}

export default Products;