import React, { useEffect, useState } from "react";

import OptionsWrapper from "../styled-components/OptionsWrapper";
import StyledModalWindow from "../styled-components/ModalWindow";
import CustomButton from "../common-components/Button";
import TransparentBackground from "../styled-components/TransparentBackground";
import Input from "../common-components/Input";

import { fetchContinents, updateUserData } from "../../api/fetchApi";
import Paragraph from "../common-components/Paragraph";

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
    Promise.all([
      updateUserData(userId, { ...updatedUser, updatedContinent }),
      setModalInfo(false),
    ]);
  };

  return (
    <React.Fragment>
      <TransparentBackground>
        <StyledModalWindow width={"30%"} onClick={(e) => e.stopPropagation()}>
          <form onSubmit={submitHandler}>
            <Paragraph> name </Paragraph>
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

            <Paragraph>surname</Paragraph>
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

            <Paragraph>email</Paragraph>
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
          </form>
        </StyledModalWindow>
      </TransparentBackground>
    </React.Fragment>
  );
};

export default UpdateUserDataModalWindow;
