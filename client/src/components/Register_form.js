import React,{useState,useEffect} from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import Select from 'react-select';
import {fetchContinents,authData} from '../api/fetchApi';
import './Form.css';  

const TYPE = 'register';

function Register() {
  function RegBtn(){
    return (
    <div className = "redir_comp">
        <small className = "small_text">Back to login:</small>
            <span className = "link" onClick = {() => setRedirect(true)}>login</span>
    </div>
    );   
  }
 
useEffect(() => {
  async function continents(){
    let response = await fetchContinents();
    let json = await response.json();  
      setOptions(
          json.body.map((item) => {
            return {
              id : item.id,
              label : item.continent
            }
          })
        )
  } 
  continents();
  return () =>{
    setOptions = [];
  }
},[]);
const [loading,setLoading] = useState(false);
const [form,setForm] = useState({
    name : '',
    surname : '',
    email : '',
    password : null,
});
const [continent,setContinent] = useState(null);
let [options,setOptions] = useState([]);
const [redirect,setRedirect] = useState(false);

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
  setLoading(true);
  try {
    form['continent'] = continent;
    let response = await authData(form,TYPE);
    let json = await response.json();
console.log(json);
        if(response.ok) setRedirect(true);
  } catch (error) {
     console.log('fetch error:',error);
  }
  setLoading(false);
}
if(loading){
  return <Spinner  animation="border" className = "spinner" variant="primary"/>
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
        <RegBtn />
      </Form>
    </>
  );
}
export default Register;
