import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Update, Get } from "../services/allAPI";

function Edit() {
    
    const { id } = useParams();
    const [values, setValues] = useState({
        id: '',
        imageurl: '',
        title: '',
        year: '',
        language: '',
        author: ''
    })
    const getdata = async () => {
        const response = await Get(id)
        setValues(response.data)
    }
    const Navigate = useNavigate();
    useEffect(() => {
        getdata();
    }, [])
    const IsValidate = () => {
        let isproceed = true;
        var letters = /^[a-zA-Z s+]+$/;
        var numbers = /^[0-9]+$/;
        var name = document.getElementById('name');
        var err = document.getElementById('label-name');
        var errnum = document.getElementById('label-num');
        var Year = document.getElementById('year');
        var errnumless = document.getElementById('label-num-less')
        var lag = document.getElementById('lag')
        var errlag = document.getElementById('label-lag')
        var errauthor = document.getElementById('label-author')
        var author = document.getElementById('author')
        if (!name.value.match(letters)) {
            isproceed = false;
            err.style.display = 'block';
        }
        else {
            err.style.display = 'none';
        }
        if (Year.value.length !== 4) {
            isproceed = false;
            errnumless.style.display = 'block';
        }
        else {
            errnumless.style.display = 'none';
        }
        if (!Year.value.match(numbers)) {
            isproceed = false;
            errnum.style.display = 'block';
        }
        else {
            errnum.style.display = 'none';
        }
        if (!lag.value.match(letters)) {
            isproceed = false;
            errlag.style.display = 'block';
        }
        else {
            errlag.style.display = 'none';
        }
        if (!author.value.match(letters)) {
            isproceed = false;
            errauthor.style.display = 'block';
        }
        else {
            errauthor.style.display = 'none';
        }
        return isproceed;
    }
    const handleUpdate = async (event) => {
        event.preventDefault();
        if (IsValidate()) {
            try {
                await Update(id, values);
                Navigate('/booklist');
            }
            catch (err) {
                console.log(err);
            }
        }
    }
    return (
        <>
            <Container>
                <Row>
                    <Col className='p-5'>
                        <h1 className='pb-2'>Update</h1>
                        <form onSubmit={handleUpdate}>
                            <label htmlFor="">Book ID</label>
                            <input type="text" className='form-control' id='id' required value={values.id} onChange={e => setValues({ ...values, id: e.target.value })} />
                            <label id='label-id' className='label-id'>Enter valid ID</label>
                            <br />
                            <label htmlFor="">Image Url</label>
                            <input type="text" className='form-control' required value={values.imageurl} onChange={e => setValues({ ...values, imageurl: e.target.value })} />
                            <br />
                            <label htmlFor="">Name</label>
                            <input type="text" className='form-control' id='name' required value={values.title} onChange={e => setValues({ ...values, title: e.target.value })} />
                            <label id='label-name' className='label-name'>Enter valid Name</label>
                            <br />
                            <label htmlFor="">Year</label>
                            <input type="text" className='form-control' id='year' required value={values.year} onChange={e => setValues({ ...values, year: e.target.value })} />
                            <label id='label-num' className='label-num'>Enter valid Year</label>
                            <label id='label-num-less' className='label-num-less'>Enter correct format -YYYY-</label>
                            <br />
                            <label htmlFor="">Language</label>
                            <input type="text" className='form-control' id='lag' required value={values.language} onChange={e => setValues({ ...values, language: e.target.value })} />
                            <label id='label-lag' className='label-lag'>Enter valid Language</label>
                            <br />
                            <label htmlFor="">Author</label>
                            <input type="text" className='form-control' id='author' required value={values.author} onChange={e => setValues({ ...values, author: e.target.value })} />
                            <label id='label-author' className='label-author'>Enter valid Name</label>
                            <br />
                            <Link to='/booklist' className="btn btn-primary mt-3">Back</Link>
                            <button className='btn btn-success ms-2 mt-3' >Submit</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Edit