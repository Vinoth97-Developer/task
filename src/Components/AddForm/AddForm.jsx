import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function AddForm(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [details,setDetails]=useState({name:'',email:''});


  let handleForm=(e)=>{
let {name,value}=e.target;
let d={...details};
d[name]=value;
setDetails(d);
  }
  let handleSubmit=()=>{
    setShow(false);
    props.sendDetails(details)
    console.log('add');
  }
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add
      </Button>
      <Form  >

      <Modal show={show} onHide={handleClose}  backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Person</Modal.Title>
        </Modal.Header>
        <Modal.Body>


        <Form.Group className="mb-3" controlId="username">
        <Form.Label>Name :</Form.Label>
        <Form.Control type="name" placeholder="Enter Name" onChange={handleForm} value={details.name} name="name" />
      </Form.Group>
       
     
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email :</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" onChange={handleForm} value={details.email} name="email"/>
      </Form.Group>

    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit} >
           Submit
          </Button>
        </Modal.Footer>
      </Modal>
      </Form>
    </>
  );
}

