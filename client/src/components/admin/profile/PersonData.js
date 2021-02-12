import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { userAction } from "../../../actions/userAction";

import Paragraph from "../../common-components/Paragraph";
import ProfilePlace from "../profile/profile_styles/ProfilePlace";
import UserDataWrapper from "../profile/profile_styles/UserDataWrapper";
import UserPhotoWrapper from "../profile/profile_styles/UserPhotoWrapper";
import UserCredentials from "../profile/profile_styles/UserCredentials";
import Img from "../../common-components/Img";
import Input from "../../common-components/Input";
import CustomButton from "../../common-components/Button";

import UpdateModalWindow from "../../ModalTools/UpdateUserDataModalWindow";

import { getUserData } from "../../../api/fetchApi";

const getUserIdFormLS = () => {
  return localStorage.getItem("user_id") || null;
};

function PersonData() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [modalInfo, setModalInfo] = useState(false);

  useEffect(() => {
    async function getUser() {
      setLoading(true);
      const userData = await getUserData(getUserIdFormLS());
      setUser(userData);
      setLoading(false);
    }
    getUser();
  }, []);
  if (loading) {
    return <Spinner animation="border" className="spinner" variant="warning" />;
  }
  return (
    <React.Fragment>
      <ProfilePlace>
        <UserDataWrapper>
          <UserPhotoWrapper>
            <Img
              src="/img/system/user.png"
              title="user page"
              alt="logout"
              width={"220px"}
              height={"220px"}
              radius={"50%"}
              transform={false}
            />
            <Paragraph> {`${user.name} ${user.surname}`} </Paragraph>
          </UserPhotoWrapper>
          <UserCredentials>
            <label htmlFor="name">Name</label>
            <Input
              readOnly
              name="name"
              margin={"2px 10px 10px 10px"}
              brs={"8px"}
              value={`${user.name} ${user.surname}`}
            />
            <label htmlFor="email">Email</label>
            <Input
              name="email"
              readOnly
              margin={"2px 10px 10px 10px"}
              brs={"8px"}
              value={`${user.email}`}
            />
            <label htmlFor="continent">Continent</label>
            <Input
              readOnly
              name="continent"
              margin={"2px 10px 10px 10px"}
              brs={"8px"}
              value={`${user.continent}`}
            />
            <CustomButton width={'100px'} variant="outline-info" onClick={() => setModalInfo(true)} > Update </CustomButton>
          </UserCredentials>
        </UserDataWrapper>
      </ProfilePlace>
      {modalInfo && (
          <UpdateModalWindow  userId = { getUserIdFormLS() } oldUserData={user} setModalInfo={setModalInfo} />
        )}
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
