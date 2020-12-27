import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";
import { authData } from "../api/fetchApi";
import { authfetch } from "../frontHelpers/authHelper";
import { isFormDirtyCheck } from "../frontHelpers/validationHelper";

import ErrorMessage from "./styled-components/ErrorMessage";
import "./Form.css";
import Flexed from "./styled-components/Flexed";
import ErrorPopUp from "./styled-components/ErrorPopUp";

const TYPE = "login";

function Login() {
  function RegBtn() {
    return (
      <div className="redir_comp">
        <small className="small_text">If you're not register:</small>
        <span className="link" onClick={() => setRedirect(true)}>
          register
        </span>
      </div>
    );
  }
  const history = useHistory();
  let [errorMessage, setErrorMessage] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);
  const [validatedForm, setValidation] = useState({});
  const [form, setForm] = useState({
    email: "",
    password: null,
  });

  const formHandle = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const redirectBetweenForms = () => {
    if (redirect) return <Redirect to="/register" />;
  };
  const adminRedirect = () => {
    history.push("/user/admin");
  };
  if (loading) {
    return <Spinner animation="border" className="spinner" variant="primary" />;
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const isValid = isFormDirtyCheck(form);
    await setValidation(() => ({
      ...validatedForm,
      ...isFormDirtyCheck(form),
    }));
    if (!isValid.email && !isValid.password) {
      //true params - errors exists, false params - no errors
      const { responsed, status } = await authData(form, TYPE);
      if (status >= 400 && status < 600 && status !== 422) {
        errorMessage.push(responsed.message);
      } else if (status === 422) {
        setErrorMessage(responsed.errors.map((err) => err.msg));
      } else {
        for (const [key, token] of Object.entries(responsed)) {
          localStorage.setItem(key, token);
        }
        adminRedirect();
      }
    }
    setLoading(false);
  };
  return (
    <>
      <Flexed>
        {errorMessage.length !== 0 && (
          <ErrorPopUp width={"600px"} height={"45px"}>
            {errorMessage.map((err) => {
              return <p>{err}</p>;
            })}
          </ErrorPopUp>
        )}
        <Form className="form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="m-label">Email:</Form.Label>
            <br />
            <Form.Control
              type="text"
              placeholder="email"
              name="email"
              value={form.email}
              onChange={formHandle}
            />
            {!!validatedForm.email ? (
              <ErrorMessage> Empty field, please fill out </ErrorMessage>
            ) : null}
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label className="m-label">Password:</Form.Label>
            <br />
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={formHandle}
            />
            {!!validatedForm.password ? (
              <ErrorMessage> Empty field, please fill out </ErrorMessage>
            ) : null}
          </Form.Group>
          <Button variant="primary" className="m-btn" onClick={onSubmit}>
            Log in
          </Button>
          <RegBtn />
          {redirectBetweenForms()}
        </Form>
      </Flexed>
    </>
  );
}
export default Login;
