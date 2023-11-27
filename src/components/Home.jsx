

import { Link} from 'react-router-dom';
import React from 'react';
import Backgroundpic from '../Pictures/pexels-stanislav-kondratiev-2908984.jpg';

import './Home.css'; 

function Home() {
  return (
    <div className="divStyle" style={{ backgroundImage: `linear-gradient(rgba(33, 11, 11, 0.7), rgba(0, 0, 0, 0.7)), url(${Backgroundpic})` }}>
      <h1 className="h1Style d-flex align-items-center justify-content-center fw-bolder ">LIBRARY <br/> MANAGEMENT SYSTEM</h1>
      {/* <h1 className="h2Style d-flex align-items-center justify-content-center fw-bolder ">MANAGEMENT SYSTEM</h1> */}

      <div className="d-flex justify-content-center align-items-center">
        <p className="pStyle">
          "Efficiently organize and access a vast collection of literature with our intuitive library management system, streamlining cataloging and enhancing user experience."
        </p>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        {/* <button className="btn btn-success rounded ">Explore Now</button> */}
        
        <Link to={`/booklist`} className='btn btn-success rounded buttonStyle'>Explore Now</Link>
      </div>
    </div>
  );
}

export default Home;
