import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { Form, Button, Spinner } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import Select from 'react-select';
import { fetchContinents, authData } from '../api/fetchApi';
import { continentsAction } from '../actions/continentsAction';
import { isFormDirtyCheck } from '../frontHelpers/validationHelper';

import ErrorMessage from "./styled-components/ErrorMessage";
import ErrorPopUp from "./styled-components/ErrorPopUp";
import Flexed from "./styled-components/Flexed";

import './Form.css';


const TYPE = 'register';
function Register({continents, getAllContinents}) {

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    surname: '',
    email: '',
    password: null,
  });
  const [validatedForm, setValidation] = useState({});
  const [continent, setContinent] = useState(null);
  const [options, setOptions] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    async function getContinents() {
      getAllContinents();
       const response = await fetchContinents();
       const json = await response.json();
      setOptions(
        json.body.map((item) => {
          return {
            id: item.id,
            label: item.continent
          }
        })
      )
    }
    getContinents();
  }, []);

  const formHandle = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  }
  const redirectHandler = () => {
    if (redirect) {
      return <Redirect to='/login' />
    }
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const isValid = isFormDirtyCheck(form);
    await setValidation(() => ({ ...validatedForm, ...isFormDirtyCheck(form) }));
    if (!isValid.name && !isValid.surname && !isValid.email && !isValid.password) {
      const { responsed, status } = await authData({ ...form, continent: continent }, TYPE);
      if (status >= 400 && status < 600) {
        setErrorMessage(() => responsed.message);
      }
      else setRedirect(true);
    }
    setLoading(false);
  }
  if (loading) {
    return <Spinner animation="border" className="spinner" variant="primary" />
  }
  function RegBtn() {
    return (
      <div className="redir_comp">
        <small className="small_text">Back to login:</small>
        <span className="link" onClick={() => setRedirect(true)}>login</span>
      </div>
    );
  }
  return (
    <>
      <Flexed >

        {
          errorMessage
          && 
        <ErrorPopUp width={'600px'} height={'45px'}><p>{ errorMessage }</p></ErrorPopUp>
        }
        <Form className="form">
          <Form.Group controlId="formBasicName">
            <Form.Label className="m-label">Name: </Form.Label>
            <br />
            <Form.Control type="text" placeholder="name" name="name" value={form.name} onChange={formHandle} />
            {!!validatedForm.name ?
              (<ErrorMessage > Empty field, please fill out </ErrorMessage>)
              : null}
          </Form.Group>
          <Form.Group controlId="formBasicSurname">
            <Form.Label className="m-label">Surname: </Form.Label>
            <br />
            <Form.Control type="text" placeholder="surname" name="surname" value={form.surname} onChange={formHandle} />
            {!!validatedForm.surname ?
              (<ErrorMessage > Empty field, please fill out </ErrorMessage>)
              : null}
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="m-label">Email:</Form.Label>
            <br />
            <Form.Control type="text" placeholder="email" name="email" value={form.email} onChange={formHandle} />
            {!!validatedForm.email ?
              (<ErrorMessage > Empty field, please fill out </ErrorMessage>)
              : null}
          </Form.Group>
          <Form.Group controlId="formBasicContinent">
            <Form.Label className="m-label">Continent:</Form.Label>
            <Select options={options} onChange={(data) => setContinent(data.id)} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label className="m-label">Password:</Form.Label>
            <br />
            <Form.Control type="password" placeholder="Password" name="password" value={form.password} onChange={formHandle} />
            {!!validatedForm.password ?
              (<ErrorMessage > Empty field, please fill out </ErrorMessage>)
              : null}
          </Form.Group>
          {redirectHandler()}

          <Button variant="primary" className="m-btn" onClick={onSubmit}>
            Sign in
        </Button>
          <RegBtn />
        </Form>
      </Flexed>
    </>
  );
}
const mapStateToProps = (state) => ({
  continents : state.continents,
});
const mapDispatchToProps = (dispatch) => ({
  getAllContinents : () => dispatch(continentsAction())
});

export default connect(mapStateToProps,mapDispatchToProps)(Register);
