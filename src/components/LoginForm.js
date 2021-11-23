import React from 'react';
import { useState } from 'react';
import { Button,Container,Modal } from 'react-bootstrap';
import { useHistory } from 'react-router';
import CartContainer from '../containers/CartContainer';

 export const Example=()=> {

    let history=useHistory();
    const [show, setShow] = useState(false);
    const [name,setName]  =useState(" ");
    const [value,setaValue] =useState({
        name:"",
        password:"",
    })
    const {username,password}=value;

    const onInputchange =(event)=>{
        setaValue({...value,[event.target.name]:event.target.value})
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleLogin = () =>{
    setName("user Loged!")
    setShow(false);
    history.push("/CartContainer");
    }

    return (
      <>
     <Container>
  
     </Container>
        <Button variant="primary" onClick={handleShow}>
          Login
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <form>
                  <label>username:
                      <input type="text" name="username" value={username} onChange={onInputchange} />
                  </label>

                  <label>password:
                      <input type="password" name="password" value={password} onChange={onInputchange}/>
                  </label>
              </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
           
            <Button variant="primary" onClick={handleLogin}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 