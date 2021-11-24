import React from 'react';
import { useState } from 'react';
import { Button,Container,Modal } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { showhides } from '../constants/ActionTypes';
import { useDispatch,useSelector } from 'react-redux';


  const Example=()=> {

    let history=useHistory();
    const dispatch = useDispatch();
    const showState = useSelector((state) => state.show);
    dispatch(showhides(showState));
    
    const [value,setaValue] =useState({
        username:"",
        password:"",
    })
    const [show,setShow] = useState(false)
    console.log("Show....",show)
    const {username,password}=value;

    const onInputchange =(event)=>{
        setaValue({...value, [event.target.name]:event.target.value})
    }
    console.log(value)
    const handleClose = () => {
      setShow(false);
    }
    const handleShow=()=>{
      setShow(true)

    } 
    
    
   const  handleSubmit=(event)=>{ 
       event.preventDefault();
      setShow(false)
      console.log(value)
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
              <form onSubmit={handleSubmit}>
                  <label>username:
                      <input type="text" name="username" value={username} onChange={onInputchange} />
                  </label>

                  <label>password:
                      <input type="password" name="password" value={password} onChange={onInputchange}/>
                  </label>

                  <input type="submit" value= "submit" />
              </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
          </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default Example;
  
 