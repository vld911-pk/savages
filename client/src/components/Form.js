import React,{useState,useEffect} from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import './Form.css';  

function Login() {

const [form,setForm] = useState({
    name : '',
    surname : '',
    email : '',
    password : null,
    hobbie : ''
});
const [redirect,setRedirect] = useState(false);

useEffect(() =>{
      //setRedirect(false);
},[])


const formHandle = (event) =>{
    setForm({...form,[event.target.name] : event.target.value});
}
const redirectHandler = () =>{
  if(redirect){
    return <Redirect to = '/' />
  }
}

const onSubmit = async (e) =>{
  e.preventDefault();
  try {
   let response = await fetch('http://localhost:3002/api/register',{
      method: 'POST',
      body : JSON.stringify(form),
      headers: {
       'Content-Type':'application/json'
      }
  });
  if(response.ok){
      setRedirect(true);
  }
  
  } catch (error) {
    console.log('fetch error:',error);
  }
    
}
  return (
    <>
      <Form className = "form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label className = "m-label">Name: </Form.Label>
          <br />
          <Form.Control type="text" placeholder="name" name = "name" onChange = {formHandle}/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className = "m-label">Surname: </Form.Label>
          <br />
          <Form.Control type="text" placeholder="surname" name = "surname" onChange = {formHandle}/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label className = "m-label">Email:</Form.Label>
          <br />
          <Form.Control type="text" placeholder="email" name = "email" onChange = {formHandle}/>
        </Form.Group>
         <Form.Group controlId="formBasicEmail">
          <Form.Label className = "m-label">Hobbie: </Form.Label>
          <br />
          <Form.Control type="text" placeholder="hobbie" name = "hobbie" onChange = {formHandle}/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label className = "m-label">Password:</Form.Label>
          <br />
          <Form.Control type="password" placeholder="Password" name = "password" onChange = {formHandle}/>
        </Form.Group>
        {redirectHandler()}
        <Button variant="primary" className = "m-btn" onClick = {onSubmit}>
          Log in
        </Button>
      </Form>
    </>
  );
}
export default Login;
