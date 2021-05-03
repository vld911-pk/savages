import React, { useEffect } from "react";
import { fetchTest } from "../../../../api/fetchApi";
import Paragraph from "../../../common-components/Paragraph";

function AdminEmt() {
  useEffect(() => {
    async function anonym() {
      let word = await fetchTest();
      console.log('front word',word);
    }
    anonym();
  });
  return (
    <React.Fragment>
      <Paragraph>Emt</Paragraph>
    </React.Fragment>
  );
}

export default AdminEmt;
