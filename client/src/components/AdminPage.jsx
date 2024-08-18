import { useState, useEffect, React} from 'react';
import axios from 'axios';
import './css/AdminPageStyle.css';
import AdminNav from './AdminNav';
import {
  LineChart,
  lineElementClasses,
  markElementClasses,
} from '@mui/x-charts/LineChart';


function Products(){
  
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
  ];

  let [result, setResult] = useState();
  let [noItem, setNoItem] = useState(0);
  const [counter, setCounter] = useState(0);

  const loadData = async() => {
    const response = await axios.get('https://fakestoreapi.com/products');  /*http://localhost:2000/products*/
    setResult(response.data);
    setNoItem(response.data.length);
    setCounter(counter+1)
     // await new Promise(r => setTimeout(r, 2000));
     let tot = [];
     for (let i = 0; i < noItem; i++) {
      if (tot.includes(result[i].category)){
        //donothing
      }
      else{
        tot.push(result[i].category)
      }
    }
  }

  useEffect(() =>{
      loadData();
    },[counter]);

    return(
    <>
      <AdminNav />
      <div className='AdminBgMain'>
        <div style={{height:'auto', width:'auto', display:'flex', padding:'4px', justifyContent:'space-evenly', alignItems:'center',gap:'15px'}}>
          <div className='sub sub1'>
            <h1>Todays Sales</h1>
            <h4>No of Orders today: 0</h4>
            <h4>No of Deliveries today: 0</h4>
            <h4>Today's Top Seller: 0</h4>
            <div className='bar-graph-outline'>
            <div className="skills">
        <div className="charts">
          <div className="chart chart--dev">
            <span className="chart__title">Top Selling Catergory Today:</span>
            <ul className="chart--horiz">
              <li className="chart__bar" style={{width: '98%'}}>
                <span className="chart__label">
                  Men's Clothing
                </span>
              </li>
              <li className="chart__bar" style={{width: '98%'}}>
                <span className="chart__label">
                Women's Clothing
                </span>
              </li>
              <li className="chart__bar" style={{width: '70%'}}>
                <span className="chart__label">
                Jewellery
                </span>
              </li>
              <li className="chart__bar" style={{width: '60%'}}>
                <span className="chart__label">
                  Electronics
                </span>
              </li>
              
            </ul>
          </div>
      
        </div>
      </div>
      </div>
          </div>

          <div className='sub sub1'>
          <h1>Monthly Sales</h1>
            <h4>No of Orders this month: 0</h4>
            <h4>No of Deliveries this month: 0</h4>
            <h4>This Month's Top Seller: 0</h4>
            <div className='bar-graph-outline'>
            <div className="skills">
        <div className="charts">
          <div className="chart chart--dev">
            <span className="chart__title">Top Selling Catergory this Month:</span>
            <ul className="chart--horiz">
              <li className="chart__bar" style={{width: '98%'}}>
                <span className="chart__label">
                Men's Clothing
                </span>
              </li>
              <li className="chart__bar" style={{width: '98%'}}>
                <span className="chart__label">
                Women's Clothing
                </span>
              </li>
              <li className="chart__bar" style={{width: '70%'}}>
                <span className="chart__label">
                Jewellery
                </span>
              </li>
              <li className="chart__bar" style={{width: '60%'}}>
                <span className="chart__label">
                Electronics
                </span>
              </li>
              
            </ul>
          </div>
      
        </div>
      </div>
      </div>
          </div>
          <div className='sub-box' >
            <div className='sub1'>
            <h1>Sales Chart</h1>
            <LineChart
      width={500}
      height={300}
      series={[
        { data: pData, label: 'pv', id: 'pvId' },
        { data: uData, label: 'uv', id: 'uvId' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        [`.${lineElementClasses.root}, .${markElementClasses.root}`]: {
          strokeWidth: 1,
        },
        '.MuiLineElement-series-pvId': {
          strokeDasharray: '5 5',
        },
        '.MuiLineElement-series-uvId': {
          strokeDasharray: '3 4 5 2',
        },
        [`.${markElementClasses.root}:not(.${markElementClasses.highlighted})`]: {
          fill: '#fff',
        },
        [`& .${markElementClasses.highlighted}`]: {
          stroke: 'none',
        },
      }}
    />
            </div>
    <div className='sub1-cyl'>
        <h1> <i class="fa fa-globe"></i> Server Status</h1>
        <h1 className='server-status online'>ONLINE</h1>
        <h1 className='server-status offline' hidden>OFFLINE</h1>
    </div>
        
          </div>
        
        </div>
      </div>

    </>
    )
}

export default Products;