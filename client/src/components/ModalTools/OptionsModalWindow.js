import React from "react";
import StyledModalWindow from "../styled-components/ModalWindow";
import CustomButton from "../common-components/Button";
import TransparentBackground from "../styled-components/TransparentBackground";
import Paragraph from "../common-components/Paragraph";
import ModalOptionsWrapper from "./styles/ModalOptionsWrapper";
import ModalSettingBlock from "./styles/ModalSettingBlock";

const OptionsModalWindow = ({
  taskC,
  complexity,
  taskTime,
  setTaskTime,
  setTaskCount,
  setOptModalInfo,
  handleComplexity,
  setPassedTasks,
}) => {
  return (
    <React.Fragment>
      <TransparentBackground onClick={() => setOptModalInfo(false)}>
        <StyledModalWindow onClick={(e) => e.stopPropagation()}>
          <ModalOptionsWrapper>
            <ModalSettingBlock>
              <Paragraph font={"25px"} color={"#0c0c47"}>
                complexity
              </Paragraph>
              <br />
              <select value={complexity} onChange={(e) => handleComplexity(e)}>
                <option> 1 complexity </option>
                <option> 2 complexity </option>
                <option> 3 complexity </option>
              </select>
            </ModalSettingBlock>
            <ModalSettingBlock>
              <Paragraph font={"25px"} color={"#0c0c47"}>
                task count
              </Paragraph>
              <br />
              <select
                value={taskC}
                onChange={(e) => {
                  Promise.all([                   
                    setTaskCount(e.target.value),
                    setPassedTasks(0),
                  ])
                }}
              >
                <option> 5 tasks </option>
                <option> 8 tasks </option>
                <option> 10 tasks</option>
                <option> inf </option>
              </select>
              </ModalSettingBlock>
              <ModalSettingBlock>
              <Paragraph font={"25px"} color={"#0c0c47"}>
                {" "}
                task time{" "}
              </Paragraph>
              <br />
              <select
                value={taskTime}
                onChange={(e) => setTaskTime(e.target.value)}
              >
                <option> 1 minute </option>
                <option> 2 minute </option>
                <option> 3 minute </option>
                <option> inf </option>
              </select>
              </ModalSettingBlock>
          </ModalOptionsWrapper>
          <CustomButton
            onClick={() => setOptModalInfo(false)}
            width={"100px"}
            variant="outline-warning"
          >
            {" "}
            Close{" "}
          </CustomButton>
        </StyledModalWindow>
      </TransparentBackground>
    </React.Fragment>
  );
};

export default OptionsModalWindow;
