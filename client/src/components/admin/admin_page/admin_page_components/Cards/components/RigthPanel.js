import React from "react";
import styled from "styled-components";
import Img from "../../../../../common-components/Img";
import OptionsWrapper from "../../../../../styled-components/OptionsWrapper";

const StyledPanel = styled.div`
  width: 80%;
  padding: 10px;
  margin: 15px;
  margin-top: 80px;
  border: 1px solid lightgrey;
  border-radius: 15px;
  box-shadow: 1px 1px 1px; 
`;

const RightPanel = () => {
  return (
    <StyledPanel>
      <OptionsWrapper>
        <Img
          src="/img/system/hint.png"
          title="hint"
          alt="hint"
          width={"50px"}
          height={"50px"}
          radius={"40%"}
          border={false}
          // onClick={() => setModalInfo(true)}
        />
        <Img
          src="/img/system/options.png"
          title="options"
          alt="hint"
          width={"50px"}
          height={"50px"}
          radius={"40%"}
          border={false}
         // onClick={() => setOptModalInfo(true)}
        />
      </OptionsWrapper>
    </StyledPanel>
  );
};

export default RightPanel;