/* import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { uploadNewBook } from '../services/allAPI';

function AddBook() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[book,addbook]=useState({
    id:"",
    url:"",
    name:"",
    year:"",
    lang:"",
    author:""

  })
     console.log(book);

  const handleUpload =async ()=>{
    const {id,url,name,year,lang,author} = book
    if(!id || !url || !name || !year || !lang ||!author){
      // toast.warning
      alert('please fill the form completely')
    }
    else{
       const response = await uploadNewBook (book)
       console.log(response);
       if(response.status>=200 && response.status<300){
        // toast.success
        alert(`${response.data.name} Book has been successfully Uploaded`)
        //to close the modal
        // setUploadVideoStatus(response.data)
        handleClose()
       }
       else{
        console.log(response);
        // toast.error
        alert('Something went wrong . Try again later')
       }
    }
   } 
   
   return (
      <>
        <div className='d-flex justify-content-center align-items-center mt-5'>
          <h1>BookDetails</h1>
          <button onClick={ handleShow} style={{background:'red'}}><i class="fa-solid fa-cloud-arrow-up fa-2x " style={{color:'black'}}></i>AddBook Details</button>

          </div>


    
          <Modal show={show} onHide={handleClose}>
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
        <Form.Control type="text" placeholder="Enter the image URL"   onChange={(e)=>addbook({...book,url:e.target.value})}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter the Name"   onChange={(e)=>addbook({...book,name:e.target.value})}/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter the Year of Book"   onChange={(e)=>addbook({...book,year:e.target.value})}/>
        </Form.Group>

      
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter the Language"  onChange={(e)=>addbook({...book,lang:e.target.value})}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter the Author " onChange={(e)=>addbook({...book,author:e.target.value})}  />
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
      </>
  
  )
}

export default AddBook */