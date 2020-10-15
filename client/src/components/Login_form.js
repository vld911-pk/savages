import React,{useState} from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import './Form.css';  



function Login() {
    function Reg_btn(){
        return (
        <div className = "redir_comp">
            <small className = "small_text">If you're not register:</small>
                <a className = "link" onClick = {() => setRedirect(true)}>register</a>
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
   let response = await fetch('http://localhost:3002/api/login',{
      method: 'POST',
      body : JSON.stringify(form),
      headers: {
       'Content-Type':'application/json'
      }
  });
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
        <Reg_btn />
        {redirectHandler()}
      </Form>
    </>
  );
}
export default Login;
