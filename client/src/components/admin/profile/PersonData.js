import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { userAction } from "../../../actions/userAction";

import Paragraph from "../../common-components/Paragraph";
import ProfilePlace from "../profile/profile_styles/ProfilePlace";

import { getUserData } from "../../../api/fetchApi";

const getUserIdFormLS = () => {
  return localStorage.getItem("user_id") || null;
};

function PersonData() {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function user() {
      const userData = await getUserData(getUserIdFormLS());
      console.log('userData',userData);
      setUser(userData);
    }
    user();
  }, []);

  return (
    <React.Fragment>
      <ProfilePlace>
        <Paragraph> Person Data </Paragraph>
        <ul>
          <li>{user.name} {user.surname}</li>
        </ul>
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
