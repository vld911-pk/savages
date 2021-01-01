import React from "react";
import { useHistory } from "react-router-dom";
import ButtonWithImage from "../common-components/ButtonWithImage";
import Img from "../common-components/Img";

import { removeTokensAndIdFromLocalStorage } from "../../frontHelpers/tokenHelper";

const Logout = () => {
  const history = useHistory();
  return (
    <>
      <ButtonWithImage
        width={"40px"}
        height={"40px"}
        onClick={() => {
          removeTokensAndIdFromLocalStorage();
          history.push("/");
        }}
      >
        <Img
          src="/img/system/logout2.png"
          title="logout"
          alt="logout"
          width={"40px"}
          height={"40px"}
          radius={"50%"}
          border={true}
        />
      </ButtonWithImage>
    </>
  );
};

export default Logout;
