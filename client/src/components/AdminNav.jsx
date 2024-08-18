import './css/AdminNavStyle.css';
function AdminNav(){
    return(
        <>
        <div className='AdminNav'>
        <div style={{display:'flex',padding:'10px',justifyContent:'space-between', alignItems:'center',height:'60px',boxSizing:'border-box'}}>
        <a href="/"> <h1 style={{color:'white',fontSize:'45px',width:'100%'}}><i class="fa fa-gears"></i>TiTAN ADMIN</h1> </a>

    <div style={{display:'flex',justifyContent:'space-evenly',width:'70%',height:'100%',alignItems:'center',padding:'0px'}}>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <a href="/admin" className="Anav-buttons" ><i class="fa fa-eye"></i> Dashboard</a>
        <a href="/manage_products" className="Anav-buttons" ><i class="fa fa-tags"></i> Manage Products</a>
        <a href="/manage_users" className="Anav-buttons" ><i class="fa fa-users"></i> Manage Users</a>
        <a href="/manage_orders" className="Anav-buttons"><i class="fa fa-shopping-cart"></i> Manage Orders</a>
    </div>
  
    </div>
    </div>
    <div className='gray-bg'></div>
    </>
    )
}

export default AdminNav;