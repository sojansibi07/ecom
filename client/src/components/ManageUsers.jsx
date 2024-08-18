import { useState, useEffect, React} from 'react';
import axios from 'axios';
import './css/ManageUserStyle.css';
import AdminNav from './AdminNav';
function ManageUsers(){
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
            <h1>User Management</h1>
          </div>
          <div className='prods-details'>
          <h2>Total Number of users: 0</h2>
          <h2>Total Number of users <span> Online</span>: 0</h2>
          <a href="/addproduct" className='prods-button-area'><button className='a2C prods-button'>Add User Privileges</button></a>
          </div>
        </div>
        <div>
            <div className='user-middle'>
          <div className='search-div'>
          <input type="text" className='prods-search' id='prods-search' placeholder='Search Users'/>
          <button className='prods-search-submit'><i class="fa fa-search"></i></button>
          
          </div>
          <a href="/addproduct" className='prods-button-area'><button className='a2C prods-button'>Remove User Privileges</button></a>
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
        <div className='user-cards'>
              
              <div style={{width:'20%', backgroundColor:'#bfbfbf',textAlign:'center',borderRadius:'700px'}}>
              <a href=''>
              {/* <img src='' alt="User image" style={{
                width:'200px',
                height:'200px',
                borderRadius: '12px'}}/> */}
                <i class="fa fa-user" style={{color:'#4e4d4d', fontSize:'102px'}}></i>
                </ a>
                </div>
                <div style={{width:'60%'}}>
                <a href=''>
              <h1>Admin</h1>
              <h2>User Mode: <span className='high-admin'> Admin </span></h2>
              </a>
              </div>
              
              <button className='close-cart-popup' onClick={() => setTrigger(false)}><i class="fa fa-trash" style={{fontSize:'20px'}}></i> Remove User</button>
             </div>
        {
          (trigger) ? (result?.map((product) => (
            
            <div className='user-cards'>
              
              <div style={{width:'20%', backgroundColor:'#bfbfbf',textAlign:'center',borderRadius:'700px'}}>
              <a href=''>
              {/* <img src='' alt="User image" style={{
                width:'200px',
                height:'200px',
                borderRadius: '12px'}}/> */}
                <i class="fa fa-user" style={{color:'#4e4d4d', fontSize:'102px'}}></i>
                </ a>
                </div>
                <div style={{width:'60%'}}>
                <a href=''>
              <h1>User Name</h1>
              <h2>User Mode: <span className='high-user'> Normal </span></h2>
              </a>
              </div>
              
              <button className='close-cart-popup' onClick={() => setTrigger(false)}><i class="fa fa-trash" style={{fontSize:'20px'}}></i> Remove User</button>
             </div>
             
         ))) : ''
        }
    </div>
      </div>
        </>
    )
}

export default ManageUsers;