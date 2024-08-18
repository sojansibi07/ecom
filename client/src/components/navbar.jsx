import './css/Navstyle.css';
function HomeNav(){
    return(
        <div className='BodyNav'>
        <div style={{display:'flex',padding:'10px',justifyContent:'space-between', alignItems:'center',height:'50px'}}>
        <a href="/admin"> <h1 style={{color:'white',fontSize:'45px',width:'100%'}}><i class="fa fa-gift"></i >TiTAN</h1> </a>

    <div style={{display:'flex',justifyContent:'space-evenly',width:'40%',height:'100%',alignItems:'center',padding:'0px'}}>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <a href="/products" className="nav-buttons" ><i class="fa fa-search"></i> Browse</a>
        <a href="/login" className="nav-buttons" ><i class="fa fa-user"></i> Login</a>
        <a href="/cart" className="nav-buttons"><i class="fa fa-shopping-cart"></i> Cart</a>
    </div>
  
    </div>
    </div>
    )
}

export default HomeNav;