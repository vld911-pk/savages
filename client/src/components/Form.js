import React,{useState} from "react";
import { Form, Button } from "react-bootstrap";

function Login() {

const [form,setForm] = useState({
    name : '',
    surname : '',
    age : null,
    password : null
});

const formHandle = (event) =>{
    setForm({...form,[event.target.name] : event.target.value});
}
const onSubmit = async () =>{
    fetch('http://localhost:3002/api/login',{
        method: 'POST',
        body : {
            name : form.name,
            surname : form.surname,
            age : form.age,
            password : form.password
        },
        mode: 'no-cors', 
        headers: {
        'Content-Type': 'application/json'
        }
    })
}
  return (
    <>
      <Form >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name: </Form.Label>
          <br />
          <Form.Control type="text" placeholder="name" onChange = {formHandle}/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Surname: </Form.Label>
          <br />
          <Form.Control type="text" placeholder="surname" onChange = {formHandle}/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Age:</Form.Label>
          <br />
          <Form.Control type="number" min = "10" max = "100" placeholder="age" onChange = {formHandle}/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <br />
          <Form.Control type="password" placeholder="Password" onChange = {formHandle}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick = {onSubmit}>
          Submit
        </Button>
      </Form>
    </>
  );
}
export default Login;
