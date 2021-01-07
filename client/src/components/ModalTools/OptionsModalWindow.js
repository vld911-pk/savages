import React from "react";
import StyledModalWindow from "../styled-components/ModalWindow";
import CustomButton from "../common-components/Button";
import TransparentBackground from "../styled-components/TransparentBackground";
import Paragraph from "../common-components/Paragraph";
import ModalOptionsWrapper from "./styles/ModalOptionsWrapper";

const OptionsModalWindow = ({
  taskC,
  complexity,
  setTaskCount,
  setOptModalInfo,
  handleComplexity,
}) => {
  return (
    <React.Fragment>
      <TransparentBackground onClick={() => setOptModalInfo(false)}>
        <StyledModalWindow onClick={(e) => e.stopPropagation()}>
          <ModalOptionsWrapper>
              <div>
            <Paragraph font = {'25px'} color={"#0c0c47"}>task complex</Paragraph><br />
            <select value={complexity} onChange={(e) => handleComplexity(e)}>
              <option> 1 </option>
              <option> 2 </option>
              <option> 3 </option>
            </select>
            </div>
            <div>
            <Paragraph font = {'25px'} color={"#0c0c47"}> task count </Paragraph><br />
            <select value={taskC} onChange = {e => setTaskCount(e.target.value)}>
              <option> 5 </option>
              <option> 8 </option>
              <option> 10 </option>
              <option> inf </option>
            </select>
            </div>
            <div>
            <Paragraph font = {'25px'} color={"#0c0c47"}> task time </Paragraph><br />
            <select value={taskC} onChange = {e => alert('haven\'t done yet')}>
              <option> 1m </option>
              <option> 2m </option>
              <option> 3m </option>
              <option> inf </option>
            </select>
            </div>
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
