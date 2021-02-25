import React, { useEffect, useState } from "react";
import { fetchContinents, updateUserData } from "../../api/fetchApi";

import styled from "styled-components";
import OptionsWrapper from "../styled-components/OptionsWrapper";
import StyledModalWindow from "../styled-components/ModalWindow";
import CustomButton from "../common-components/Button";
import TransparentBackground from "../styled-components/TransparentBackground";
import Input from "../common-components/Input";

import Paragraph from "../common-components/Paragraph";

import { userSameDataAlert } from "../../text_files/alerts"

const Hr = styled.hr`
  width : 80%;
`;
const Form = styled.form`
    @media (max-width: 800px) {
      input{
        width : 150px;
        height : 25px;
      }
    }
`;

const isObjEquals = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

const UpdateUserDataModalWindow = ({ userId, oldUserData, setModalInfo }) => {
  const [updatedUser, setUpdatedUser] = useState({
    name: oldUserData.name,
    surname: oldUserData.surname,
    email: oldUserData.email,
  });
  const [updatedContinent, setUpdatedContinent] = useState(
    oldUserData.continent
  );
  const [options, setOptions] = useState([]);
  const [err, setErr] = useState(false);

  useEffect(() => {
    async function getContinents() {
      const response = await fetchContinents();
      const json = await response.json();
      setOptions(
        json.body.map((item) => {
          return {
            id: item.id,
            label: item.continent,
          };
        })
      );
    }
    getContinents();
  }, []);

  const updatedUserHandler = (event) => {
    setUpdatedUser({ ...updatedUser, [event.target.name]: event.target.value });
  };
  const updatedContinentHandler = ({ target: { value } }) => {
    setUpdatedContinent(value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
   
    if(isObjEquals(oldUserData, {...updatedUser,continent: updatedContinent})){
      setErr(true);
      return ;
    }

    Promise.all([
      updateUserData(userId, { ...updatedUser, ...updatedContinent }),
      setModalInfo(false),
    ]);
  };

  return (
    <React.Fragment>
      <TransparentBackground>
        <StyledModalWindow err={err ? err : null} width={"30%"} onClick={(e) => e.stopPropagation()}>
          <Form onSubmit={submitHandler}>
            <Paragraph> name: </Paragraph>
            <Input
              name="name"
              margin={"3px 10px 7px 10px"}
              width={"250px"}
              height={"50px"}
              font={"22px"}
              value={updatedUser.name}
              onChange={(e) => updatedUserHandler(e)}
            />
            <br />

            <Paragraph>surname: </Paragraph>
            <Input
              name="surname"
              width={"250px"}
              height={"45px"}
              font={"22px"}
              margin={"3px 10px 7px 10px"}
              value={updatedUser.surname}
              onChange={(e) => updatedUserHandler(e)}
            />
            <br />

            <Paragraph>email: </Paragraph>
            <Input
              name="email"
              width={"250px"}
              height={"45px"}
              font={"22px"}
              margin={"3px 10px 3px 10px"}
              value={updatedUser.email}
              onChange={(e) => updatedUserHandler(e)}
            />
            <br />
            <Paragraph>Continents</Paragraph>
            <select
              style={{ margin: "5px auto 25px auto", fontSize: "22px", textAlign: "center" }}
              name="continent"
              width={"350px"}
              height={"45px"}
              value={updatedContinent}
              onChange={(e) => updatedContinentHandler(e)}
            >
              {options.map((item) => (
                <option key={item.id}>{item.label}</option>
              ))}
            </select>

            <OptionsWrapper margin={"5px 5px 5px 5px"} width={"100%"}>
              <CustomButton type="submit" width={"100px"} variant="success">
                {" "}
                Confirm{" "}
              </CustomButton>
              <CustomButton
                width={"100px"}
                variant="outline-info"
                onClick={() => setModalInfo(false)}
              >
                {" "}
                Close
              </CustomButton>
            </OptionsWrapper>
            { err ?  
              <>
                <Hr />
                <Paragraph color={'red'}>{userSameDataAlert}</Paragraph>
              </>
              : null }
          </Form>
        </StyledModalWindow>
      </TransparentBackground>
    </React.Fragment>
  );
};

export default UpdateUserDataModalWindow;
