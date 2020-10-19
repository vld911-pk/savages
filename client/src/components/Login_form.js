import React,{useState} from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import './Form.css';  
import {authData} from '../api/fetchApi';

const TYPE = 'login';

function Login() {
    function RegBtn(){
        return (
        <div className = "redir_comp">
            <small className = "small_text">If you're not register:</small>
                <span className = "link"  onClick = {() => setRedirect(true)}>register</span>
        </div>
        );   
    }
    
const [redirect,setRedirect] = useState(false);
const [form,setForm] = useState({
    email : '',
    password : null,
});

const formHandle = (event) =>{
    setForm({...form,[event.target.name] : event.target.value});
}
const redirectHandler = () =>{
    if(redirect){
      return <Redirect to = '/register' />
    }
  }

const onSubmit = async (e) =>{
  e.preventDefault();
  try {
   await authData(form,TYPE);
  } catch (error) {
    console.log('fetch error:',error);
  }
    
}
  return (
    <>
      <Form className = "form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label className = "m-label">Email:</Form.Label>
          <br />
          <Form.Control type="text" placeholder="email" name = "email" onChange = {formHandle}/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label className = "m-label">Password:</Form.Label>
          <br />
          <Form.Control type="password" placeholder="Password" name = "password" onChange = {formHandle}/>
        </Form.Group>
        <Button variant="primary" className = "m-btn" onClick = {onSubmit}>
          Sign in
        </Button>
        <RegBtn />
        {redirectHandler()}
      </Form>
    </>
  );
}
export default Login;
