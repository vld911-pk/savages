import React, { useState, useEffect } from "react";

import Img from "../../../../common-components/Img";
import Paragraph from "../../../../common-components/Paragraph";

import NumberWrapper from "./styles/NumberWrapper";
import NumberTask from "./styles/NumberTask";
import NumberStatistic from "./styles/NumberStatistic";
import Exersice from "./Exersice";

function AdminNumbers() {

  return (
    <React.Fragment>
      <NumberWrapper>
        <NumberTask>
          <Exersice />
        </NumberTask>

        <NumberStatistic>
          <Paragraph>Statistic :</Paragraph>
          <hr />
          <Paragraph color={"red"}> MaxScore : 300 </Paragraph>
        </NumberStatistic>
      </NumberWrapper>

    </React.Fragment>
  );
}

export default AdminNumbers;
