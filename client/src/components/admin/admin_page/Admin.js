import React from "react";
import AdminGrid from "../admin_page/admin_page_components/AdminGrid";
import AdminWrap from "./admin_styles/AdminWrap";

function Admin() {
  return (
    <React.Fragment>
      <AdminWrap>
        <AdminGrid />
      </AdminWrap>
    </React.Fragment>
  );
}

export default Admin;
