import React, { useState, useEffect } from "react";

import Img from "../../../../common-components/Img";
import Paragraph from "../../../../common-components/Paragraph";

import ModalWindow from "../../../../ModalTools/ModalWindow";
import NumberWrapper from "./styles/NumberWrapper";
import NumberTask from "./styles/NumberTask";
import NumberStatistic from "./styles/NumberStatistic";
import TaskHeader from "./styles/TaskHeader";

import { numberComplexityList } from "../../../../../constants/complexity";

function AdminNumbers() {
  const [modalInfo, setModalInfo] = useState(false);
  const [complexity, setComplexity] = useState(1);
  const [range, setRange] = useState([]);

  useEffect(() => {
    const range = numberComplexityList(complexity);
    setRange(range);
  }, [complexity]);

  return (
    <React.Fragment>
      <NumberWrapper>
        <NumberTask>
          <TaskHeader>
            <Paragraph>Complexity: {complexity}</Paragraph>
            <Img
              src="/img/system/hint.png"
              title="hint"
              alt="hint"
              width={"50px"}
              height={"50px"}
              radius={"40%"}
              border={false}
              onClick={() => setModalInfo(true)}
            />
          </TaskHeader>
          <hr />
        </NumberTask>

        <NumberStatistic>
          <Paragraph>Statistic :</Paragraph>
          <hr />
          <Paragraph color={"red"}>Score :</Paragraph>
        </NumberStatistic>
      </NumberWrapper>
      {modalInfo && (
        <ModalWindow modalInfo={modalInfo} setModalInfo={setModalInfo} />
      )}
    </React.Fragment>
  );
}

export default AdminNumbers;
