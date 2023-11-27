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
  return (
    <>
      <Container fluid>
        <div className='d-flex m-4 justify-content-center align-items-center '>
          <h1 className=' m-4'>Book List</h1>
          <Link to='/addbook' className='btn btn-outline-primary fs-4'>Add Book</Link>
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
    </>
  )
}

export default BookList