import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import ButtonWithImage from "../../common-components/ButtonWithImage";
import Img from '../../common-components/Img';

function ProfileButton() {
  const [redirect, setRedirect] = useState(false);

  const clickHandler = () => {
    if (redirect) {
      return <Redirect to="/user/admin/person" />;
    }
  };
  return (
    <>
      <div>
        {clickHandler()}
        <ButtonWithImage
          onClick={() => {
            setRedirect(true);
          }}
          style={{ flex: "2" }}
          className="btn btn-outline-primary"
        >
          <Img
            src="/img/system/user.png"
            title="user page"
            alt="logout"
            width={"40px"}
            height={"40px"}
            radius={"50%"}
            border={true}
          />
        </ButtonWithImage>
      </div>
    </>
  );
}
export default ProfileButton;
