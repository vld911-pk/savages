import React from 'react';
import Img from "../../../../../common-components/Img";
import Paragraph from "../../../../../common-components/Paragraph";
import TaskHeader from "../styles/TaskHeader";
import OptionsWrapper from "../../../../../styled-components/OptionsWrapper";

function TaskHeaderComponent({complexity, score, setModalInfo, setOptModalInfo}){

    return(
        <>
        <TaskHeader>
            <Paragraph>Complexity: {complexity} </Paragraph>
            <Paragraph color={'black'} >Score: {score}</Paragraph>
            <OptionsWrapper>
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
              <Img
                src="/img/system/options.png"
                title="options"
                alt="hint"
                width={"50px"}
                height={"50px"}
                radius={"40%"}
                border={false}
                onClick={() => setOptModalInfo(true)}
              />
            </OptionsWrapper>
          </TaskHeader>
          <hr />
        </>
    );
}
export default React.memo(TaskHeaderComponent);