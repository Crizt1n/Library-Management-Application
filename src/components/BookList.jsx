import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link} from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import { Delete,GetAll } from "../services/allAPI";

/* ajay */

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadNewBook } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function BookList() {
  const [data, setData] = useState([])
  const getalldata = async () => {
    const response = await GetAll()
    setData(response.data);
  }
  useEffect(() => {
    getalldata();
  },[])

  const handleDelete = async (id) => {
  const confirm = window.confirm('Would you like to Delete');
  if (confirm) {
    try {
      await Delete(id);
      getalldata(); // Refresh data without reloading page
    } catch (error) {
      console.error("There was an error deleting the item", error);
    }
  }
}


    /* Ajay */

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const[book,addbook]=useState({
      id:"",
      imageurl:"",
      title:"",
      year:"",
      language:"",
      author:""
  
    })
       console.log(book);
  
       const handleUpload = async () => {
        const { id, imageurl, title, year, language, author } = book;
        if (!id || !imageurl || !title || !year || !language || !author) {
          toast.warning('Please fill in all fields');
        } else {
          try {
            const response = await uploadNewBook(book);
            if (response.status >= 200 && response.status < 300) {
              toast.success(`${response.data.title} Book has been successfully uploaded`);
              handleClose();
              getalldata(); // Fetch data again after successful upload
            }
          } catch (error) {
            console.error('Something went wrong:', error);
            toast.error('Something went wrong. Try again later');
          }
        }
      };



  return (
    <>
      <Container fluid>
        <div className='d-flex m-4 justify-content-center align-items-center '>
          <h1 className=' m-4'>Book List</h1>
          <button onClick={ handleShow} className='btn btn-outline-primary fs-4'>Add Book</button>

                {/* ajay */}
                
          <Modal show={show} onHide={handleClose}  backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
              <Modal.Title>Add Book Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
          <p>Please fill the following details.</p>
         <form className='border border-secondary p-3 rounded'>

         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter the ID" onChange={(e)=>addbook({...book,id:e.target.value})} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Enter the image URL" onChange={(e) => addbook({ ...book,imageurl:e.target.value})}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Enter the Name" onChange={(e) => addbook({ ...book,title:e.target.value})}/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Enter the Year of Book" onChange={(e) => addbook({ ...book, year:e.target.value})}/>
        </Form.Group>

      
        <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Enter the Language" onChange={(e) => addbook({ ...book, language:e.target.value})}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Enter the Author " onChange={(e) => addbook({ ...book, author:e.target.value})}  />
        </Form.Group>
         </form>

        </Modal.Body>
            <Modal.Footer>
              <Button variant="success" onClick={handleClose}>
               Close
              </Button>
              <Button variant="warning" onClick={handleUpload}>Upload</Button>

            </Modal.Footer>
          </Modal>

          </div>


        <Row className='row-div  m-4' md={12} lg={12} xl={12} >
          {data.map((d, i) => (
            <Col sm={6} md={6} lg={3} className='p-4'>
              <div className='row-col d-flex justify-content-center align-items-center'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={d.imageurl} />
                  <Card.Body>
                    <Card.Title>{d.title}</Card.Title>
                    <Card.Text>
                      <ListGroup as="ul" >
                        <ListGroup.Item
                          as="li"
                          className="d-flex justify-content-between align-items-start"
                        >
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">Year</div>
                            {d.year}
                          </div>
                        </ListGroup.Item>
                        <ListGroup.Item
                          as="li"
                          className="d-flex justify-content-between align-items-start"
                        >
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">Language</div>
                            {d.language}
                          </div>
                        </ListGroup.Item>
                        <ListGroup.Item
                          as="li"
                          className="d-flex justify-content-between align-items-start"
                        >
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">Author</div>
                            {d.author}
                          </div>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card.Text>
                    <div className='edit-del'>
                      <Link to={`/edit/${d.id}`} className='btn btn-primary'>Edit</Link>
                      <button onClick={e=>handleDelete(d.id)} variant="danger" className='m-1 btn btn-danger'>Delete</button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
              ))}
        </Row>
      </Container>
      <ToastContainer position='bottom-center' theme='colored' autoClose={2000}/>
    </>
  )
}

export default BookList