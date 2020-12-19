import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { authData } from '../api/fetchApi';
import { isFormDirtyCheck } from '../frontHelpers/validationHelper'

import './Form.css';

const TYPE = 'login';

function Login() {
  function RegBtn() {
    return (
      <div className="redir_comp">
        <small className="small_text">If you're not register:</small>
        <span className="link" onClick={() => setRedirect(true)}>register</span>
      </div>
    );
  }

  const [redirect, setRedirect] = useState(false);
  const [validatedForm , setValidation] = useState({});
  const [form, setForm] = useState({
    email: '',
    password: null,
  });
  
  const formHandle = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  }
  const redirectBetweenForms = () => {
    if (redirect) {
      return <Redirect to='/register' />
    }
  }
  
  const onSubmit = async (e) => {
    e.preventDefault();
    setValidation(isFormDirtyCheck(form));
    const tokens = await authData(form, TYPE);
    for (const [key, token] of Object.entries(tokens)) {
      localStorage.setItem(key, token);
    }
  }
  return (
    <>

      <Form className="form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="m-label">Email:</Form.Label>
          <br />
          <Form.Control type="text" placeholder="email" name="email" onChange={formHandle} />
          {!!validatedForm.email ?
            (<p style={{ color: 'red' }}> Empty field, please fill out </p>)
            : null}
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label className="m-label">Password:</Form.Label>
          <br />
          <Form.Control type="password" placeholder="Password" name="password" onChange={formHandle} />
          {!!validatedForm.password ?
            (<p style={{ color: 'red' }}> Empty field, please fill out </p>)
            : null}
        </Form.Group>
        <Button variant="primary" className="m-btn" onClick={onSubmit} >
          Sign in
        </Button>
        <RegBtn />
        {'asd',console.log(isFormDirtyCheck(form)) }
        {redirectBetweenForms()}
      </Form>
    </>
  );
}
export default Login;
