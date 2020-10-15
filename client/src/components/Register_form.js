import React,{useState} from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import Select from 'react-select';
import './Form.css';  

function Register() {

const [form,setForm] = useState({
    name : '',
    surname : '',
    email : '',
    password : null,
});
const [continent,setContinent] = useState(null);
const [redirect,setRedirect] = useState(false);
const options = [
  { id: 1, label: 'Asia' },
  { id: 2, label: 'Africa' },
  { id: 3, label: 'Australia' },
  { id: 4, label: 'North_America' },
  { id: 5, label: 'South_America' },
]

const formHandle = (event) =>{
    setForm({...form,[event.target.name] : event.target.value});
}
const redirectHandler = () =>{
  if(redirect){
    return <Redirect to = '/login' />
  }
}
const onSubmit = async (e) =>{
  e.preventDefault();
  try {
   form['continent'] = continent;
   let response = await fetch('http://localhost:3002/api/register',{
      method: 'POST',
      body : JSON.stringify(form),
      headers: {
       'Content-Type':'application/json'
      }
  });
  if(response.ok) setRedirect(true);
 
  } catch (error) {
    console.log('fetch error:',error);
  }
    
}
  return (
    <>
      <Form className = "form">
        <Form.Group controlId="formBasicName">
          <Form.Label className = "m-label">Name: </Form.Label>
          <br />
          <Form.Control type="text" placeholder="name" name = "name" onChange = {formHandle}/>
        </Form.Group>
        <Form.Group controlId="formBasicSurname">
          <Form.Label className = "m-label">Surname: </Form.Label>
          <br />
          <Form.Control type="text" placeholder="surname" name = "surname" onChange = {formHandle}/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className = "m-label">Email:</Form.Label>
          <br />
          <Form.Control type="text" placeholder="email" name = "email" onChange = {formHandle}/>
        </Form.Group>
        <Form.Group controlId="formBasicContinent">
        <Form.Label className = "m-label">Continent:</Form.Label>
        <Select options={options} onChange = {(data) => setContinent(data.id)}/>
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
export default Register;
