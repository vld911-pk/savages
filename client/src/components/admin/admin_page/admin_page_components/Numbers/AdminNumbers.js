import React, { useState, useEffect } from "react";

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
          <div style={{'display' : 'flex','justify-content':'space-between','padding':'5px'}}>
            <Paragraph color={'grey'} font={'17px'}>Number game</Paragraph>
            <Paragraph color={"red"} font={'17px'} > MaxScore : 300 </Paragraph>
          </div>
          <hr />
        </NumberStatistic>
      </NumberWrapper>
    </React.Fragment>
  );
}

export default AdminNumbers;
