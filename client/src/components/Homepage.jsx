import { useState, useEffect, React} from 'react';
import axios from 'axios';
import './css/HomeStyle.css';
import NavBar from './navbar';
function Homepage(){

    return(
      <>
      <NavBar />
      <div id='MainBody'>
        <div className='main-div'> 
        <div className='heading'>
            <h2>Welcome to </h2><h1>TiTAN</h1>
            </div>
          <div className='text'>
            <h3 style={{textAlign:'center'}}>Where you ask and We Deliver!<br/>
              Webpage under development!!<br/>
              To visit the admin page click on the TiTan logo on the Navgiation Bar!
            </h3>
          </div>
          <div className='ButtonArea'>
           <a href="/products"><button className='button'><i class="fa fa-shopping-cart"></i> Start Shopping</button></a> 
          </div>
        </div>
      </div> 
      </>
    )
}

export default Homepage;