import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='bg-dark text-light py-4'>
      <div className='container'>
        <div className='row'>

          {/* Website Info */}
          <div className='col-md-6 col-lg-4 mb-4'>
            <h4 className='mb-4'><i className="fa-solid fa-book"></i> Library Management</h4>
            <p>
              "Unlock the world of knowledge with our library management app.
              Where every book is a journey waiting to be explored.
              Organize, explore, and discover a world of wisdom at your fingertips.
              Your library, reimagined. Turning pages into pixels.
              Welcome to the future of library management."
            </p>
          </div>

          {/* Links */}
          <div className='col-md-6 col-lg-4 mb-4'>
            <h4 className='mb-4'>Links</h4>
            <ul className='list-unstyled'>
              <li><Link to={'/'} className='text-light text-decoration-none'>Home</Link></li>
              <li><Link to={'/booklist'} className='text-light text-decoration-none'>BookList</Link></li>
              <li><Link to={'/edit/:id'} className='text-light text-decoration-none'>Edit</Link></li>
            </ul>
          </div>

          {/* Guides */}
          <div className='col-md-6 col-lg-4 mb-4'>
            <h4 className='mb-4'>Guides</h4>
            <ul className='list-unstyled'>
              <li><a href={'https://react-bootstrap.github.io/'} className='text-light text-decoration-none'>React</a></li>
              <li><a href={'https://react-bootstrap.github.io/'} className='text-light text-decoration-none'>React Bootstrap</a></li>
              <li><a href={'https://bootswatch.com'} className='text-light text-decoration-none'>Bootswatch</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className='col-md-6 col-lg-4 mb-4'>
            <h4 className='mb-4'>Contact Us</h4>
            <div className='mb-3'>
              <input type='text' className='form-control' placeholder='Enter Your EmailID' />
              <button className='btn btn-warning text-white mt-2'>Subscribe</button>
            </div>
            <div className='d-flex justify-content-evenly'>
              <a href={'www.linkedin.com'} className='text-light text-decoration-none'><i className="fa-brands fa-linkedin-in fa-2x"></i></a>
              <a href={'www.linkedin.com'} className='text-light text-decoration-none'><i className="fa-brands fa-twitter fa-2x"></i></a>
              <a href={'www.linkedin.com'} className='text-light text-decoration-none'><i className="fa-brands fa-facebook fa-2x"></i></a>
              <a href={'www.linkedin.com'} className='text-light text-decoration-none'><i className="fa-brands fa-square-instagram fa-2x"></i></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className='mt-5 text-center'>Copyright &copy; 2023 Library Management. Built with React.</p>
      </div>
    </div>
  );
}

export default Footer;
