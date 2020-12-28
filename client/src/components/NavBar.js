import CustomButton from "./common-components/Button";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./NavBar.css";
import SignBtn from "./styled-components/Nav_components/Sign_Button";
import NavInformWrapper from "./styled-components/NavInformWrapper";
import NavAuthButWrapper from "./styled-components/Nav_components/NavAuthButWrapper";
import ModalWindow from "./ModalTools/ModalWindow";
import Logout_btn from "../components/ModalTools/Logout_btn";
import ProfileButton from "../components/styled-components/Nav_components/ProfileButton";

import { doesTokenExists } from "../frontHelpers/tokenHelper";

function NavBar() {
  let history = useHistory();
  const token = doesTokenExists();
  const [modalInfo, setModalInfo] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="logo-wrapper">
          <h1
            className="logo"
            onClick={() => {
              history.push("/");
            }}
          >
            FS
          </h1>
        </div>
        <NavInformWrapper>
          <CustomButton
            width={"80px"}
            variant="outline-primary"
            onClick={() => setModalInfo(true)}
          >
            {" "}
            Info{" "}
          </CustomButton>
          <CustomButton
            width={"80px"}
            variant="outline-primary"
            onClick={() => history.push("/user/admin")}
          >
            {" "}
            Profile{" "}
          </CustomButton>
        </NavInformWrapper>
        {modalInfo && (
          <ModalWindow modalInfo={modalInfo} setModalInfo={setModalInfo} />
        )}
        <NavAuthButWrapper>
          {token ? (
            <NavLink to="/user/admin/person">
              <ProfileButton />
            </NavLink>
          ) : (
            <NavLink to="/login">
              <SignBtn />
            </NavLink>
          )}
          <Logout_btn />
        </NavAuthButWrapper>
      </div>
    </>
  );
}
export default NavBar;
