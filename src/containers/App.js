import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import {LoginForm} from '../components/LoginForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import{Route,Link,BrowserRouter as Router} from 'react-router-dom';

const App = () => (
<Router>
<div>
    <h2>Shopping Cart Example</h2>
<Container>
    <Navbar bg="light" variant="dark">
      <Link to="/LoginForm">Home</Link>
      <Link to="/ProductsContainer">ProductsContainer</Link>
      <Link to="/CartContainer">CartContainer</Link>
    </Navbar>
  </Container>
      
    <Route exact path="/LoginForm" component={LoginForm}/>
    <Route path="/ProductsContainer" component={ProductsContainer}/>
    <Route path="/CartContainer" component={CartContainer}/>


</div>
  </Router>
)

export default App
