import React from "react";
import Paragraph from "../../common-components/Paragraph";
import AdminGrid from "../admin_page/admin_page_components/AdminGrid";
import AdminWrap from "./admin_styles/AdminWrap";

function Admin() {
  return (
    <React.Fragment>
      <AdminWrap>
        <Paragraph> Admin Page </Paragraph>
        <AdminGrid />
      </AdminWrap>
    </React.Fragment>
  );
}

export default Admin;
