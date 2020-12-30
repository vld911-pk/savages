import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { userAction } from "../../../actions/userAction";

import Paragraph from "../../common-components/Paragraph";
import ProfilePlace from "../profile/profile_styles/ProfilePlace";
import UserDataWrapper from "../profile/profile_styles/UserDataWrapper";
import UserPhotoWrapper from "../profile/profile_styles/UserPhotoWrapper";
import UserCredentials from "../profile/profile_styles/UserCredentials";
import Img from "../../common-components/Img";
import CustomButton from "../../common-components/Button";

import { getUserData } from "../../../api/fetchApi";
import Li from "../../common-components/Li";

const getUserIdFormLS = () => {
  return localStorage.getItem("user_id") || null;
};

function PersonData() {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function user() {
      const userData = await getUserData(getUserIdFormLS());
      console.log("userData", userData);
      setUser(userData);
    }
    user();
  }, []);

  return (
    <React.Fragment>
      <ProfilePlace>
        <Paragraph> Person Data </Paragraph>
        <UserDataWrapper>
          <UserPhotoWrapper>
            <Img
              src="/img/system/user.png"
              title="user page"
              alt="logout"
              width={"220px"}
              height={"220px"}
              radius={"50%"}
            />
          </UserPhotoWrapper>
          <UserCredentials>
            <ul>
              <li>
                <Li>
                  {user.name} {user.surname}
                </Li>
              </li>
              <li>
                <Li>{user.email}</Li>
              </li>
            </ul>
            <CustomButton width={'100px'} variant="outline-info" > Update </CustomButton>
          </UserCredentials>
        </UserDataWrapper>
      </ProfilePlace>
    </React.Fragment>
  );
}

// const mapStateToProps = (state) => {
//   user : state.user
// };
// const mapDispatchToProps = (dispatch) => {
//   getUser : dispatch(userAction(getUserIdFormLS()))
// };

export default PersonData;
