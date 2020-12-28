import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Paragraph from "../../common-components/Paragraph";
import ProfilePlace from "../profile/profile_styles/ProfilePlace";

function PersonData() {
  return (
    <React.Fragment>
      <ProfilePlace>
        <Paragraph> Person Data </Paragraph>
      </ProfilePlace>
    </React.Fragment>
  );
}
const mapStateToProps = (state) => {};
const mapDispatchToProps = (dispatch) => {};

export default PersonData;
